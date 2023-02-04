import React, { useState,useEffect } from 'react'
import './cart.css'
import Axios from 'axios';
 
const Cart = () => {
 
  const [noofitems , setnoofitems] = useState(1);

  const thanks=()=>{
    if(noofitems>0){alert("Thanks for buying !!");}
  }


  const [data, setdata] = useState("");

  const getdata = async () => {
    const response = await Axios.get("http://localhost:5000/getdata");
    setdata(response.data);
  }
	useEffect(() => {
    getdata();
    console.log('hi');
	}, []);

  return (
    <div className='cart' id='cart'>
      <div className='titlecart'>CART</div>
      <img src={require('../../img/1.jpg')} alt={"error"}/>
      <div className='subtitlecart'>No Of Items : </div>
      <div className='nooflaptopincart'>
        <p className='minus cartbtn btn' onClick={()=>{if(noofitems>1){setnoofitems(noofitems-1);}}}>-</p>
        <p value="" className="nooflaptopsinput">{noofitems}</p>
        <p className='plus cartbtn btn' onClick={()=>{setnoofitems(noofitems+1)}}>+</p>
      </div>
      <div className='buybtn btn' onClick={thanks}>Buy</div>
    </div>
  )
}
 
  export default Cart;
