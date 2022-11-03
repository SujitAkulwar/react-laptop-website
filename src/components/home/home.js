import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='laptopIMG'>
        <img src={require('../../img/1.jpg')} alt={"error"}/>
      </div>
      <div className='laptopDetails'>
        <h1>
            LAPTOP MAX Pro
        </h1>
        <p>
        Intel 12th Gen. i7-12700H, 43CM QHD+ 165Hz Creator Laptop (32GB/1TB NVMe SSD/ Windows 11 Pro/Nvidia RTX A5500 16GB GDDR6/Lunar Grey/2.49Kg), A12UMST-237IN
        </p>
        <div className='addToCart'>
          <img src={require('../../img/cart.png')} alt={"error"}/>
        </div>
      </div>
    </div>
  )
}

export default Home
