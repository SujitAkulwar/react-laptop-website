import React from 'react'
import './App.css'
import Header from './components/header/header'
import Index from './components/index/indexs'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import About from './components/about/about'
// import Login from './components/login/login'
import Contact from './components/contact/contact'
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    
    <div className='app'>
      <ScrollToTop smooth top="20"/>
      <Header />
      <Index />
      <Home />
      <Cart />
      <About />
      {/* <Login /> */}
      <Contact />
    </div>
  )
}

export default App
