import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <div className='titlecart'>CART</div>
      <img src={require('../../img/1.jpg')} alt={"error"}/>
      <div className='subtitlecart'>No of laptops : </div>
      <div className='nooflaptopincart'>
        <p className='minus cartbtn btn'>-</p>
        <p value="" className="nooflaptopsinput">1</p>
        <p className='plus cartbtn btn'>+</p>
      </div>
      <div className='buybtn btn'>Buy</div>
    </div>
  )
}

export default Cart
