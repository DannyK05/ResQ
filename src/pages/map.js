import ActionLayout from "../containers/actionLayout";
import React, { useEffect, useState, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

const Map = () => {
    const [userLocation, setUserLocation] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to New York City coordinates
    const [nearestHospital, setNearestHospital] = useState(null);

    // Define fetchNearbyHospitals as a useCallback to memoize it
    const fetchNearbyHospitals = useCallback(async (lat, lng) => {
        try {
            // Make API request to fetch nearby hospitals
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=hospital&key=AIzaSyA-eimkkqp9OSHxHlKuScXbyz9Cr-dgqf0`);
            if (response.data.results && response.data.results.length > 0) {
                setNearestHospital(response.data.results[0]);
            }
        } catch (error) {
            console.error('Error fetching nearby hospitals:', error);
        }
    }, []);

    useEffect(() => {
        // Fetch user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    fetchNearbyHospitals(position.coords.latitude, position.coords.longitude);
                },
                error => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [fetchNearbyHospitals]); // Include fetchNearbyHospitals in the dependency array

    return (
        <ActionLayout name="Map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA-eimkkqp9OSHxHlKuScXbyz9Cr-dgqf0' }}
                defaultCenter={userLocation}
                defaultZoom={12}
            >
                {nearestHospital && (
                    <Marker
                        lat={nearestHospital.geometry.location.lat}
                        lng={nearestHospital.geometry.location.lng}
                        text="H"
                    />
                )}
            </GoogleMapReact>
        </ActionLayout>
    );
};

const Marker = ({ text }) => <div className="marker">{text}</div>;

export default Map;
