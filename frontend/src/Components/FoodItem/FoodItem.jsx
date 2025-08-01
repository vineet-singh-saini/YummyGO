import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-div">
            <img src={image} alt="food-img" />

        </div>
        <div className="fd-name">
            <p><b>{name}</b></p>
            <div className="fd-name-img-div">
            <img src={assets.ratings} alt="ratings" />
            </div>
        </div>
         <div className="fd-desc">
            <p>{description}</p>
        </div>
        <div className="fd-price">
            <p>Price: ${price}</p>
            <div className="cart-btns">
            { !cartItems[id] ?
                <img className='add-to-cart' src={assets.addToCart} alt="" onClick={()=> addToCart(id)}/>
                : <div className="fd-item-cart-counter">
                    <img src={assets.addToCart} alt="" onClick={()=> addToCart(id)}/>
                    <p>{cartItems[id]}</p>
                    <img src={assets.subToCart} alt="" onClick={()=> removeFromCart(id)}/>
                </div>

            }</div>
        </div>
       
        
    </div>
  )
}

export default FoodItem