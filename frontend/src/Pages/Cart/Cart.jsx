import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, food_list, getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className='cart-div'>
      <div className="cart">
        <div className="cart-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cart-titles">

                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <i className="fa-solid fa-xmark" onClick={() => removeFromCart(item.id)}></i>
              </div>
            )
          }
        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
          </div>
          <div className="cart-t-dtls">
            <p>Subtotal: </p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-t-dtls">
            <p>Delivery Fee : </p>
            <p>${getTotalCartAmount()+5}</p>
          </div>
          <hr />
          <div className="cart-t-dtls">
            <p>Total : </p>
            <p>${getTotalCartAmount()}</p>
          </div>

        </div>
        <Link to={'/delivery-info'}><button >Proceed To CheckOut</button></Link>
      </div>

        <div className="cart-promoc">
          <div>
            <p>If You Have a Promo Code, Enter It Here</p>
            <div className="cart-promo-inp">
              <input type="text" placeholder='Promo Code' />

              <button>Submit</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Cart