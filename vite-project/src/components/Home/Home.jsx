import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './home.css'

const Home = () => {
  const tshirts = useLoaderData()
  const [cart, setCart] = useState([])

  const handleCart = (tshirt) => {
    console.log(tshirt)
  }
  return (
    <div className="home-container">
      <div className='tshirt-container'>
        {
          tshirts.map(tshirt => <Tshirt handleCart={handleCart} tshirt={tshirt} key={tshirt._id}></Tshirt>)
        }
      </div>

      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>

  );
};

export default Home;