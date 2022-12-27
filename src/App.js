import { Switch } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Components/CheckOut/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
        </Routes>

      </div>
    </Router>
  );
}

export default App;
