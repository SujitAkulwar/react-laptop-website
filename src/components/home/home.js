import React from 'react'
import './home.css'



const Home = () => {
  return (
    <div className='home'>
      <div className='laptopIMG'>
        <img src={require('../../img/1.jpg')} alt={"error"}/>
      </div>
      <div className='laptopDetails'>
        <h1>
            LAPTOP
        </h1>
        <p>
            THIS IS LAPTOP
            THIS IS LAPTOP
            THIS IS LAPTOP
            THIS IS LAPTOP
            THIS IS LAPTOP
            THIS IS LAPTOP
            THIS IS LAPTOP
        </p>
        <div className='addToCart'>
          <img src={require('../../img/cart.png')} alt={"error"}/>
        </div>
      </div>
    </div>
  )
}

export default Home
