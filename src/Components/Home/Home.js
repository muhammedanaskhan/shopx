import React from 'react'
import './Home.css';
import Product from '../Product/Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src='/images/disnep_up.png'></img>

            <div className="home__row">
                <Product title="The lean startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} image={`/images/thelean__book.jpg`} rating={3}/>
                <Product title='Rossmann Professional Stand Mixer, Powerful 1400 Watts, 100% Pure Copper Motor, 4 Safety Features' price={239} image={`/images/product2.jpg`} rating={5}/>
            </div>
            <div className="home__row">
                <Product title='EXZZER Latest ID116 Plus Bluetooth Smart Fitness Band Watch' price={29.99} image={`/images/watch.jpg`} rating={5}/>
                <Product title='Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)' price={29.99} image={`/images/echo.jpg`} rating={5}/>
                <Product title='Apple 2022 11-inch iPad Pro (Wi-Fi + Cellular, 512GB) - Space Grey (4th Generation)' price={29.99} image={`/images/ipad.png`} rating={5}/>
            </div>
            <div className="home__row">
                <Product title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor - Dual WQHD 5120 x 1440, 120Hz, HDMI, Displayport, USB, 120Hz refresh rate with AMD Free Sync 2 technology for crisp HDR content display, reduced input latency, low frame rate compensation.' price={29.99} image={`/images/led1.jpg`} rating={5}/>
            </div>
        </div>
    </div>
  )
}

export default Home