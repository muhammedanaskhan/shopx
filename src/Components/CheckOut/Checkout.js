import React from 'react'
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {

  const[{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <div className="">
              <h3>{user?.email}</h3>
                <h2 className="checkout__title">Your shopping basket</h2>
                
                {basket.map(item => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                ))}
                
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout