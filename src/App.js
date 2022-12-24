import { Switch } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="app">

        <Routes>
          <Route path='/' element={[<Header />,<Home />]}/>
          <Route path='/checkout' element={[<Header />,<h1>Checkout</h1>]}/>
            

          
        </Routes>


      </div>
    </Router>
  );
}

export default App;
