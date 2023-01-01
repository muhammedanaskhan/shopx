// we are gonna build a Express App & host it on a cloud function

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MKhZjSBaRNSLfOK2R2DtJPZrwX6iFLaqAjXc6UvIAUWes9T9mkiavtz5SBwfTeS2ie60EXYljzUnw9ZDIUZGg0100ICogLJY4')

// - App config
const app = express()

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - Api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total=request.query.total;

    console.log('Payment request recieved for', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });


    //OK - created, everything worked good
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/shopx-42892/us-central1/api