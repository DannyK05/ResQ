import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import ActionLayout from '../containers/actionLayout';

const Map = ({ apiKey }) => {
  const [nearestHospital, setNearestHospital] = useState(null);

  // To get user location 
  const [userLocation, setUserLocation] = useState({
    userLatitude: null,
    userLongitude: null
  });
  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
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

      return () => {
        // Clean up the watcher when the component unmounts
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  


  useEffect(() => {
    if (userLocation.userLatitude !== null && userLocation.userLongitude !== null) {
      fetchNearbyHospitals(userLocation.userLatitude, userLocation.userLongitude);
    }
  }, [userLocation]);

  const fetchNearbyHospitals = async (lat,lng) => {
    try {
        // Make API request to fetch nearby hospitals
        const response = await axios.get('https://resq-google-api-proxy-server-1.onrender.com/fetch-nearby-hospitals', {
            params: {
                lat: lat,
                lng: lng
            }
        });
        console.log(response)

        if (response.data.results && response.data.results.length > 0) {
            setNearestHospital(response.data.results[0]);
        }
    } catch (error) {
        console.error('Error fetching nearby hospitals:', error);
    }
  };

  if (userLocation.userLatitude === null || userLocation.userLongitude === null) {
    // If user location is not available yet, you can return a loading indicator or handle it accordingly.
    return <div className='flex flex-col justify-center items-center color-blue'><h1>Loading...</h1></div>;
  }

  return (
    <ActionLayout name= "Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA-eimkkqp9OSHxHlKuScXbyz9Cr-dgqf0" }}
        defaultCenter={{
          lat: parseFloat(userLocation.userLatitude),
          lng: parseFloat(userLocation.userLongitude)
        }}
        defaultZoom={12}
      >
         <Marker
                        lat={parseFloat(userLocation.userLatitude)}
                        lng={parseFloat(userLocation.userLongitude)}
                        text="O(you)"
                    />
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

const Marker = ({text}) => <div className='font-bold text-lg' style={{ color: 'red' }}>{text}</div>;

export default Map;