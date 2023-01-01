import React, { useEffect, useState } from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider'
import './Payment.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';


function Payment() {

    const[{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const navigate = useNavigate();

    useEffect(() =>{
        // whenever basket it will make this request & ll update special stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url : `/payments/create?total=${getBasketTotal(basket) *100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>', clientSecret)


    const handleSubmit = async (event) =>  {
        // do some fancy Stripe shiiit....

        event.preventDefault();
        setProcessing (true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                crad: elements.getElement(CardElement)
            } 
        }).then(({ paymentIntent }) => {  // paymentIntent = payment confirmation
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                navigate('./orders')
        })

    }

    const handleChange = event => {
        //Listen for changes in cardElement
        // and display if any errors in card details

        setDisabled(event.empty);
        setError(event.error? event.error.message : "");

    }

  return (
    <div className='payment'>

        <div className='payment__container'>

            <h1>
                Checkout ( 
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>React lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item =>  (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}
                </div>
            </div>

            <div className="payment__section">

                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={handleSubmit} onChange={handleChange}>
                                <CardElement onChange={handleChange}/>
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                    renderText={(value) => (
                                        
                                        <h3>Order Total: {value}</h3>
                                        
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    >
                                    </CurrencyFormat>

                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                                    </button>
                                </div>

                                {/*errors*/}
                                {error &&<div>{error}</div>}
                            </form>
                    </div>

            </div>


        </div>

    </div>
  )
}

export default Payment