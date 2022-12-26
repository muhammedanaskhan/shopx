import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src="images/shopx_logo.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />

                <button className='login__signInButton'>Sign in</button>
            </form>
            
            <p className='tandc__text'>By signing-in you agree to ShopX's Conditions of 
                                    Use & Sale. Please 
                                    see our privacy notice, our Cookies Notice 
                                    and our Interest based Ads Notice
            </p>

            <button className='login__registerButton'>Create your ShopX Account</button>
        </div>

    </div>
  )
}

export default Login