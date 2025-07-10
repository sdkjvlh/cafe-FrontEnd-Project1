import React, { useState } from 'react'
import { Nav } from './Nav'
import './Home.css'
import { useCart } from './CartContext';
import { Footer } from './Footer';

function Home() {
   const { addToCart } = useCart();
  const tea = [{
    img: "tea.jpeg",
    title: "Tea",
    price: "₹15",
    button: " + Add"
  }, {
    img: "green-tea.jpeg",
    title: "Green Tea",
    price: "₹20",
    button: "+ Add"
  }, {
    img: "samosa.jpeg",
    title: "Samosa",
    price: "₹15",
    button: "+ Add"
  },
  {
    img: "cookies.jpeg",
    title: "Biscuit",
    price: "₹40",
    button: "+ Add"
  },
  {
    img: "rose-milk.jpeg",
    title: "Rose milk",
    price: "₹20",
    button: "+ Add"
  },
  {
    img: "badam-milk.jpeg",
    title: "Badam Milk",
    price: "₹25",
    button: "+ Add"
  },
  {
    img: "black-tea.jpeg",
    title: " Black Tea",
    price: "₹10",
    button: "+ Add"
  }, {
    img: "bread-omblete.jpeg",
    title: "Bread Omblete",
    price: " ₹40",
    button: "+ Add"
  }, {
    img: "bun-butter.jpeg",
    title: "Bun Butter jam",
    price: " ₹15",
    button: "Add"
  },
  {
    img: "horlicks.jpeg",
    title: "Horlicks",
    price: "₹15",
    button: "Add"
  }];

  const [inputFilter, setInputFilter] = useState('');
  const[count , setCount]=useState(0);

  const filterdData = tea.filter((item) => item.title.toLowerCase().includes(inputFilter.toLowerCase()))
 
   const handleClick = (item) => {
    addToCart(item); // ✅ add to cart
  };

  return (

    <>
    <div className="home-container">
      <div className="navbar-content">
        <div className="heading">
         <strong>Tea B</strong>
         <img src="bench.png"  />
         <strong>nch</strong>
        </div>
        <div className="nav">
  <Nav />
        </div>
      </div>
      <div className="input">
        <input type="text" onChange={(e) => setInputFilter(e.target.value)} placeholder='search' value={inputFilter} />
      </div>
      <div className="Home-content">
        {filterdData.map((item, index) => (
          <div key={index} className='item' >
            <img src={item.img} />
            <h3>{item.title} </h3>
            <div className="div">
              <p>{item.price}</p>
              <button onClick={() => handleClick(item)}>{item.button}</button>

            </div>
          </div>
        ))}

      </div>
    </div>
    <div className="footer">
      <Footer/>
    </div>
    </>
    
  )
}
export default Home
