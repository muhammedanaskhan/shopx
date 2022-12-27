import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {

  const[{basket, user},dispatch] = useStateValue();

  const  handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }


  return (
    <div className='header'>
            <Link to="/">
              <img className='header__logo' src='/images/shopx_logo.png'></img>
            </Link>
            <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>
            <div className="header__nav">

            <Link to={!user && "/login"}>  {/*only redirect to login page if there's no user*/}
              <div onClick={handleAuthentication} className="header__option">
                <div className="header__optionLineOne">Hello</div>
                <div className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</div>
              </div>
            </Link>

              <div className="header__option">
                <div className="header__optionLineOne">Returns</div>
                <div className="header__optionLineTwo">& Orders</div>
              </div>
              <div className="header__option">
                <div className="header__optionLineOne">Your</div>
                <div className="header__optionLineTwo">Prime</div>
              </div>
              <Link to="/checkout">
                <div className="header__optionBasket">
                  <ShoppingBasketIcon/>
                  <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
              </Link>
               
            </div>
    </div>
  )
}

export default Header