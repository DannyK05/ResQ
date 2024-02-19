import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import ActionLayout from '../containers/actionLayout';

const Map = ({ apiKey }) => {
  const [hospitals, setHospitals] = useState([]);
  
  // To get user location 
  const [userLocation, setUserLocation] = useState({
    userLatitude: null,
    userLongitude: null
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ 
            userLatitude: latitude,
            userLongitude: longitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (userLocation.userLatitude !== null && userLocation.userLongitude !== null) {
      fetchNearbyHospitals();
    }
  }, [userLocation]);

  const fetchNearbyHospitals = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.userLatitude},${userLocation.userLongitude}&radius=5000&type=hospital&key=${apiKey}`
      );
      setHospitals(response.data.results);
    } catch (error) {
      console.error('Error fetching nearby hospitals:', error);
    }
  };

  if (userLocation.userLatitude === null || userLocation.userLongitude === null) {
    // If user location is not available yet, you can return a loading indicator or handle it accordingly.
    return <div>Loading...</div>;
  }

  return (
    <ActionLayout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA-eimkkqp9OSHxHlKuScXbyz9Cr-dgqf0" }}
        defaultCenter={{
          lat: parseFloat(userLocation.userLatitude),
          lng: parseFloat(userLocation.userLongitude)
        }}
        defaultZoom={12}
      >
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            lat={hospital.geometry.location.lat}
            lng={hospital.geometry.location.lng}
          />
        ))}
      </GoogleMapReact>
    </ActionLayout>
  );
};

const Marker = () => <div style={{ color: 'red' }}>H</div>;

export default Map;
