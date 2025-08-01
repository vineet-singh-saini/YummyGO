import React, { useState, useEffect,useRef } from 'react'
import './LivePage.css'
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'



const LivePage = () => {
    const socketRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        socketRef.current = io('https://yummygo-backend-w3ho.onrender.com/');
        return () => socketRef.current.disconnect();
    }, []);
    const agentId = uuidv4();
    const [dFormData, setDFormData] = useState({
        name: '',
        phone: '',
        ratings: '',
    });
    const [getLocation, setgetLocation] = useState(null);
    const [agentInfoSuccess, setAgentInfoSuccess] = useState(false);


    const inputHandler = (e) => {
        setDFormData({ ...dFormData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setAgentInfoSuccess(true);
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setgetLocation(true);
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    setgetLocation(false);
                }
            }
        );
    }, []);

    useEffect(() => {
        if (getLocation === false) {
            navigate('/delivery-agent-live-tracking');
        }
    }, [getLocation]);

    useEffect(() => {
        if (getLocation && agentInfoSuccess) {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const finalData = {
                        agentId,
                        lat,
                        lng,
                        ...dFormData,
                    };
                    console.log('Sending : ', finalData );
                    socketRef.current.emit('agentLocation', finalData);
                },
                console.error,
                { enableHighAccuracy: true }
            );
            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, [getLocation,agentInfoSuccess]);

    return (
        <>
            <div className="live-loation-div">
                {getLocation === null
                    ?
                    <div className="location-pending">
                        <img src="" alt="" />
                        <p>Getting your location...</p>
                    </div>
                    :
                    <div className="live-location-form">
                        <form onSubmit={submitHandler}>
                            <h2>Enter Delivery Agent Info</h2>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                onChange={inputHandler}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Enter Mobile No."
                                name="phone"
                                onChange={inputHandler}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Ratings (e.g. 9/10)"
                                name="ratings"
                                onChange={inputHandler}
                                required
                            />
                            <button type="submit" >Confirm Delivery Agent Info</button>
                        </form>
                    </div>}
            </div>

            {agentInfoSuccess === true && (
                <> 
                <div className="agent-info-overlay"></div>
                    <div className="agent-info-success">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGWPA5b2iSxCN7HkKiPk5MFqA_1TFd_SmZw&s" alt="" />
                        <p className='agent-info-success-txt1'>Agent Info Successfully Added</p>
                        <p className='agent-info-success-txt2' >Please Keep Window Open for Location Tracking.</p>
                        <p className='agent-info-success-txt3'>Have a Coffe While Location is Being Fetched</p>
                    </div>
                </>
            )}
        </>
    )
}

export default LivePage