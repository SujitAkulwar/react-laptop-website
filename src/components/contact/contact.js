import React from 'react'
import './contact.css'

const Contact = () => {

  function error (){
    alert("error 404");
  }

  return (
    <div className='contact' id='contact'>
      <h1 className='contacttitle'>
        CONTACT US
      </h1>
        <div className='linkbox'>
            <div className='link' onClick={error}>Email</div>
            <br />
            <div className='link' onClick={error}>Facebook</div>
        </div>
    </div>
  )
}

export default Contact
