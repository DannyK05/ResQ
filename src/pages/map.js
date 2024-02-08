import ActionLayout from "../containers/actionLayout"
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";
const Map =() =>{
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        // Fetch nearby hospitals using Google Places API
        fetchNearbyHospitals();
    }, []);

    const fetchNearbyHospitals = async () => {
        // Make API request to fetch nearby hospitals
        // Parse the response and update the hospitals state
        try {
            const response = await axios.get('YOUR_PLACES_API_ENDPOINT');
            setHospitals(response.data.results);
        } catch (error) {
            console.error('Error fetching nearby hospitals:', error);
        }
    };

    return (
        <ActionLayout>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
                defaultCenter={{ lat: 40.7128, lng: -74.0060 }} // New York City coordinates
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

const Marker = () => <div className="marker">H</div>;

export default Map;