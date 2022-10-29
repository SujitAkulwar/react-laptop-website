import React from 'react'
import './App.css'
import Header from './components/header/header'
import Index from './components/index/indexs'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import About from './components/about/about'
const App = () => {
  return (
    <div className='app'>
      <Header />
      <Index />
      <Home />
      <Cart />
      <About />
    </div>
  )
}

export default App
