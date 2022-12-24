import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="/images/ad_banner.jpg" alt="" className="checkout__ad" />
            <div className="">
                <h2 className="checkout__title">Your shopping basket</h2>
                {/*BasketItem*/}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout