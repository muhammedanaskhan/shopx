import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
            <img className='header__logo' src='/images/shopx_logo.png'></img>
            <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>
            <div className="header__nav">
              <div className="header__option">
                <div className="header__optionLineOne">Hello</div>
                <div className="header__optionLineTwo">Sign in</div>
              </div>
              <div className="header__option">
                <div className="header__optionLineOne">Returns</div>
                <div className="header__optionLineTwo">& Orders</div>
              </div>
              <div className="header__option">
                <div className="header__optionLineOne">Your</div>
                <div className="header__optionLineTwo">Prime</div>
              </div>
              <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>0</span>
              </div>
            </div>
    </div>
  )
}

export default Header