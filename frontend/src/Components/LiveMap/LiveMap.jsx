import React, { useEffect } from 'react'
import './LiveMap.css'
import { useRef } from 'react'
import leaflet from 'leaflet'
import { socket } from '../../socket'


const LiveMap = () => {
    console.log('LiveMap mounted');

    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const circleRef = useRef(null);
    let watchId = null;

    const truckIcon = leaflet.icon({
        iconUrl: 'https://img.icons8.com/emoji/48/delivery-truck.png',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
    });

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = leaflet.map('map').setView([51.505, -0.09], 13);
            leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mapRef.current);
        }
        console.log('Socket connected:', socket.connected);
        socket.on('updatedLocation', (data) => {
            console.log('Received location:', data.lat, data.lng);
            if (!data.lat || !data.lng) return;

            if (markerRef.current) {
                markerRef.current.setLatLng([data.lat, data.lng]);
            } else {
                markerRef.current = leaflet.marker([data.lat, data.lng], { icon: truckIcon }).addTo(mapRef.current);
            }
            mapRef.current.setView([data.lat, data.lng], 13);
        })

        return () => {
            socket.off('updateLocation');
            if (mapRef.current) {
                mapRef.current.remove(); 
                mapRef.current = null;
            }
        };
    }, []);


    return (
        <div className="map" id="map" >

        </div>
    )
}

export default LiveMap