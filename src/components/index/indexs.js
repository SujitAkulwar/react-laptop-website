import React from 'react'
import './indexs.css'
const Indexs = () => {
  function home (){
    window.scrollBy(0, 0);
  }
  const cart = () =>{
    window.scrollTo(0, 750);
  }
  const about = () =>{
    window.scrollTo(0, 1500);
  }
  const contact = () =>{
    window.scrollTo(0, 2000);
  }
  const login = () => {
    console.log("login");
  }
  return (
    <div className='indexs'>
      <p className='homepage index' onClick={home}> 
        HOME
      </p>
      <p className='cartindex index' onClick={cart}> 
        CART
      </p>
      <p className='aboutindex index' onClick={about}>
        ABOUT
      </p>
      <p className='loginindex index' onClick={login}>
        LOGIN
      </p>
      <p className='contactindex index' onClick={contact}>
        CONTACT US
      </p>
    </div>
  ) 
}

export default Indexs
