import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/src/assets/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/src/assets/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/src/assets/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/src/assets/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/src/assets/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/src/assets/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
  return (
    <div className='container'>
      <h1>Hey👋, Yummy Pizza 🍕 is here!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}


function Header() {
//const style = {color: 'red', fontSize: "48px", textTransform: "uppercase"};
  
  return (
    <header className='header'>
        <h1>Fast Yummy Pizza Co.</h1>
    </header>
  )
}

//Parent Component
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

    {numPizzas > 0 ? (
      <>
          <p>
              Authentic Italian cuisine with six creative dishes 
              to choose from. All prepared in our stone oven, 
              using organic ingredients for a delicious experience.
          </p>

          <ul className='pizzas'>
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
          </ul>
      </>
    ) : <p>We're still working on our new menu. Please come back later</p>}

            {/* <Pizza name='Pizza Spinaci' 
      ingredients='Tomato, mozarella, spinach, and ricotta cheese'
      photoName='pizzas/spinaci.jpg'
      price={10}
      />

      <Pizza name='Pizza Funghi' ingredients='Tomato, mushrooms' price={12}
      photoName='pizzas/funghi.jpg'
      /> */}
    </main>
  )
}

//Child component
function Pizza({ pizzaObj }) {

  //if(pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
      </div>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*
        if(hour >= openHour && hour <= closeHour) alert("We're currently open!"); 
      //else alert("Sorry we're closed");
      //if (!isOpen) return <p>CLOSED</p>;
  */

  return (
<footer className='footer'>
        {isOpen ? (
          <Order closeHours = {closeHour}/>
        ) : (
              <p>
                  Happy to welcome you between {openHour}:00 and {closeHour}:00 to Fast Yummy Pizza.
              </p> 
        )}
    </footer>
  );
}

function Order(props) {
  return (
  <div className='order'>
      <p>
          We're open until the {props.closeHours}:00. Come visit us or order online.
      </p> 
      <button className='btn'>Order</button>
  </div>
);
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
