import React from 'react'
import CurrencyFormat from "react-currency-format"
import './Subtotal.css'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

function Subtotal() {

  const[{basket},dispatch] = useStateValue();

  return (
    <div className="subtotal">
    
    <CurrencyFormat
      renderText={(value) => (

        <>
          <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
          <small className="subtotal__gift">
            <input type="checkbox"/>This order contains gift
          </small>
          
        </>
      )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />

            
            <button className='checkout__button'>Proceed to checkout</button>
        
    </div>
  )
}

export default Subtotal