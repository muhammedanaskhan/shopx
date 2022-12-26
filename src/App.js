import { Switch } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Components/CheckOut/Checkout';
import Login from './Components/Login';

function App() {
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
