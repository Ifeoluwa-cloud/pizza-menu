import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App(){
  return (
    <div className='container'>
      <h1>Hello React!</h1>
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
        <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

//Parent Component
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
      </ul>

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
function Pizza(props) {
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
      </div>
      <span>{props.pizzaObj.price}</span>
    </li> 
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if(hour >= openHour && hour <= closeHour) alert("We're currently open!"); 
  //else alert("Sorry we're closed");

  return (
    <footer className='footer'>
        {isOpen && (
          <div className='order'>
              <p>
                  We're open until the {closeHour}:00. Come visit us or order online.
              </p> 
              <button className='btn'>Order</button>
          </div>
        )}
    </footer>
  );

}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
