import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


function Login() {

    const navigate = useNavigate();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/')
        })

        //some fancy Firebase Login shittt.
    }

    const register = e =>{

        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)        //do some fancy FireBase shittttt.
            .then((auth) => {
                // New user account created
                console.log(auth);
                if(auth){
                    navigate('/');
                }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="images/shopx_logo.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='login__signInButton' type='submit' onClick={signIn}>Sign in</button>
                </form>
                
                <p className='tandc__text'>
                    By signing-in you agree to ShopX's Conditions of 
                    Use & Sale. Please 
                    see our privacy notice, our Cookies Notice 
                    and our Interest based Ads Notice
                </p>

                <button onClick={register} className='login__registerButton'>Create your ShopX Account</button>
            </div>

        </div>
  )
}

export default Login