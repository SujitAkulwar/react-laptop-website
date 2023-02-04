import React from 'react'
import './login.css'

const Login = () => {

    const login = () => {
        console.log("login");
    }
  return (
    <div className='Loginpage'>
        <h1 className='LoginTitle'>
            LOGIN
        </h1>
        <div className='LoginBox'>
            <div className='LoginInput'>
                <label>Email : </label>
                  <input  name="email" className='email' type="email" />
                <br />
                <label>Password : </label>
                <input  name="password" className='password' type="password" />
            </div>
            <div className='submitlogin'>
                <div className='loginbtn' onClick={login}>
                    LOGIN
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
