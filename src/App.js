import { Switch } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Components/CheckOut/Checkout';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51MKhZjSBaRNSLfOKH2QcaPpvJmO4DAWydP8xKSZXt8mupvaq33hpShfOiCCp8CDrK5um6QO8dY8hMVegN54zMTgx00G5E9mJ20');

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {  // only run once the Appc omponent loads..

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS -->', authUser);

      if(authUser){  //User just logged in/was already logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      }else{  // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (

    <Router>
      <div className="app">
      <Header />
        <Routes>
          <Route path='/' element={[<Home />]}/>
          <Route path='/checkout' element={[<Checkout/>]}/> 
          <Route path='/login' element={[<Login/>]}></Route>   
          <Route path='/payment' 
                element={[<Elements stripe={promise}><Payment/></Elements>]}>
          </Route>  
        </Routes>

      </div>
    </Router>
  );
}

export default App;


// add react flip  +move