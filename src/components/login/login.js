import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='Loginpage'>
        <h1 className='LoginTitle'>
            LOGIN
        </h1>
        <div className='LoginBox'>
            <div className='LoginInput'>
                <label>Email : </label>
                <input value="" name="email" className='email' type="email"></input>
                <br />
                <label>Password : </label>
                <input value="" name="password" className='password' type="password"></input>
            </div>
            <div className='submitlogin'>
                <div className='loginbtn'>
                    LOGIN
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
