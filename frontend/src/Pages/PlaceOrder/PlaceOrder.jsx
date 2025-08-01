import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import { DeliveryContext } from '../../Context/FormContext';
import LiveMap from '../../Components/LiveMap/LiveMap';
import { io } from 'socket.io-client';
import { socket } from '../../socket'


const PlaceOrder = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, food_list, getTotalCartAmount } = useContext(StoreContext);
  const { deliverydata } = useContext(DeliveryContext);
  const [showAgentInfo , setShowAgentInfo] = useState(false);
  const [timelyMap , setTimelyMap] = useState(false);

  const [deliveryAgentInfo,setDeliveryAgentInfo] = useState({});
  const [currentAgentId, setCurrentAgentId] = useState(null);

  

  useEffect (()=> {
    socket.on('agentInfo', ({agentId,name,phone,ratings}) => {
      setDeliveryAgentInfo((prev)=> ({
        ...prev,[agentId] : {name,phone,ratings}
      }) );
      console.log(deliveryAgentInfo);
      setCurrentAgentId(agentId);
    });

    return ()=> {
      socket.off('agentInfo');
    }
  },[])
  

  // useEffect(() => {
  //   if (!deliverydata) {
  //     navigate('/delivery-info');
  //   }
  // }, [deliverydata, navigate]);

  // if (!deliverydata) return null;

  useEffect( ()=> {
    const timer = setTimeout(()=> {
      setShowAgentInfo(true);
    },2700);

    const mapTimer = setTimeout( ()=> {
      setTimelyMap(true);
    },5000);
    return ()=> clearTimeout(timer,mapTimer);
  },[])

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <h2 className="section-title">Order Summary</h2>

        {/* <div className="user-info-box">
          <p><strong>Name:</strong> {deliverydata.name}</p>
          <p><strong>Phone:</strong> {deliverydata.phone}</p>
          <p><strong>City:</strong> {deliverydata.city}</p>
          <p><strong>Pincode:</strong> {deliverydata.pincode}</p>
          <p><strong>Address:</strong> {deliverydata.address}</p>
          {deliverydata.notes && <p><strong>Notes:</strong> {deliverydata.notes}</p>}
        </div> */}

        <h3 className="section-subtitle">Items</h3>
        <div className="items-list">
          {food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-img" />
                  <div className="item-details">
                    <p>{item.name}</p>
                    <p>Qty: {cartItems[item.id]}</p>
                    <p>Price: ${item.price}</p>
                    {/* <p>Total: ${item.price * cartItems[item.id]}</p> */}
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="totals-box">
          <p><strong>Subtotal:</strong> ${getTotalCartAmount()}</p>
          <p><strong>Delivery:</strong> $5</p>
          <p><strong>Total:</strong> ${getTotalCartAmount() + 5}</p>
        </div>

        <button className="place-order-btn">Place Order</button>
        <p className="go-back-note">To remove items, go back to the cart.</p>
      </div>

      <div className="checkout-right">
        <div className="ordr-agent-details">
          <h2 className="section-title">Order Agent Details</h2>
          {currentAgentId && deliveryAgentInfo[currentAgentId]  ? 
          <div className="order-agent-info">
            <div className="agent-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToi2XW7ZY-YcN2ug2KjDOnXPzSC4bwgAAxkA&s"
                alt="Delivery Agent"
              />
            </div>
            <div className="agent-details">
              <p><strong>Agent ID:</strong> {currentAgentId}</p>
              <p><strong>Name:</strong> {deliveryAgentInfo[currentAgentId].name}</p>
              <p><strong>Phone:</strong> {deliveryAgentInfo[currentAgentId].phone}</p>
              <p><strong>Rating:</strong> ⭐ {deliveryAgentInfo[currentAgentId].ratings}</p>
            </div>
          </div> 
          : 
            <div className="loading">
              <div className="spinner">Searching For Agent....</div>
            </div>
          }
        </div>
        <div className="tracking-box">
         { deliveryAgentInfo[currentAgentId] ? <LiveMap /> :<div className="spinner">Waiting For Agent's Location....</div> } 
         {/* <LiveMap/> */}
        </div>
      </div>
    </div>

  )
}

export default PlaceOrder