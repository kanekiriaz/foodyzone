import React from 'react';
import './MainContent.css';
// import image from '../images/mainimage.jpg';
import image1 from '../images/image1.jpeg';
import image2 from '../images/iamge2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';


const MainContent = () => {
  return (
    <div className='main-box'>
        <div className="content-cards">
            <div className="boiled-eggs">
                
                <img src={image1} alt="" />
                <div className='context'>
                    <h3>Boiled Eggs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p> 
                </div>
                <span> <button>$10.00</button></span>
            </div>
            <div className="ramen">
                <img src={image2} alt="" />
                <div className='context'>
                    <h3>Ramen Noodles</h3>
                    <p>Spicy and savory, a college classic</p>
                </div>
                <span> <button>$25.00</button></span>
            </div>
            <div className="grilled-chicken">
                <img src={image3} alt="" />
                <div className='context'>
                    <h3>Grilled Chicken</h3>
                    <p>Healthy and delicious, a perfect combo</p>
                </div>
                <span> <button>$45.00</button></span>
            </div>
            <div className="cake">
            <img src={image4} alt="" />
                <div className='context'>
                    <h3>Chocolate Cake</h3>
                    <p>Moist and decadent, a sweet treat</p>
                </div>
                <span> <button>$18.00</button></span>
            </div>
            <div className="burger">
                <img src={image5} alt="" />
                <div className='context'>
                    <h3>Classic Burger</h3>
                    <p>Juicy patty, crispy bun, and all the fixins</p>
                </div>
                <span> <button>$24.00</button></span>
            </div>
            <div className="pancake">
                <img src={image6} alt="" />
                <div className='context'>
                    <h3>Fluffy Pancakes</h3>
                    <p>Golden brown and drizzled with syrup</p>
                </div>
                <span> <button>$25.00</button></span>
            </div>
        </div>
      
    </div>
  )
}

export default MainContent
