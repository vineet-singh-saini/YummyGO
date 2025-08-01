import React, { useContext, useState } from 'react'
import './DeliveryInfo.css'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { DeliveryContext } from '../../Context/FormContext';

const DeliveryInfo = () => {
    const navigate = useNavigate();
    const {setDeliveryData} = useContext(DeliveryContext);
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate('/place-order');
    }
    setDeliveryData(formData);
        

    return (
        <div className="delivery-info-div">


            <div className="order-form-page">
                <h2>Delivery Information</h2>
                <form className="order-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Full Address" onChange={handleChange} required />
                    <input type="text" name="city" placeholder="City" onChange={handleChange} required />
                    <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required />
                    <textarea name="notes" placeholder="Any special instructions..." onChange={handleChange}></textarea>
                    <button type="submit">Proceed to Checkout</button>
                </form>
            </div>
        </div>
    );
}

export default DeliveryInfo