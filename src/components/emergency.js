import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Circle from "../assets/icons/Group6.svg";
import Circle2 from "../assets/icons/Ellipse3.svg";
import Circle3 from "../assets/icons/Ellipse4.svg";

const EmergencyTab = ({ isVisible }) => {
    const [confirmStatus, setConfirmStatus] = useState(false);
    const [message, setMessage] = useState('');
    const [userLocation, setUserLocation] = useState({ latitude: "", longitude: "" });
    const [closestHospital, setClosestHospital] = useState(null);

    useEffect(() => {
        fetchUserLocation();
    }, []);

    const fetchUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    setMessage("Error getting user location: " + error.message);
                }
            );
        } else {
            setMessage("Geolocation is not supported by this browser.");
        }
    }

    const emergencySpecial = async () => {
        try {
            const response = await fetch('api');
            if (response.ok) {
                const data = await response.json();
                window.location.href = 'tel:' + data.phonenumber;
            } else {
                console.error("Error fetching data:", response.statusText);
            }
        } catch (error) {
            console.log('Failed to retrieve special ones info', error);
        }
    }

    const emergencyCustomCentres = async () => {
        try {
            const response = await fetch('api');
            if (response.ok) {
                const data = await response.json();
                window.location.href = 'tel:' + data.phonenumber;
            } else {
                console.log("Couldn't retrieve centre data: ", response.statusText)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const calculateDistance = (location1, location2) => {
        const lat1 = location1.latitude;
        const lon1 = location1.longitude;
        const lat2 = location2.lat;
        const lon2 = location2.lng;
    
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
    
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
    
        console.log("Distance:", distance);
        return distance;
    }
    
    // Helper function to convert degrees to radians
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    

    const fetchNearbyHospitals = async () => {
        try {
            const response = await axios.get('https://res-q-google-api-proxy-server.vercel.app/maps/api/place/nearbysearch/json', {
            params: {
                location: `${userLocation.latitude},${userLocation.longitude}`,
                radius: 1500,
                type: 'hospital',
                key: 'AIzaSyA-eimkkqp9OSHxHlKuScXbyz9Cr-dgqf0' 
            }
            });
            const hospitalData = response.data.results;
            console.log("Response: ", response)
            console.log("Hospital fetched: ", hospitalData)
            if (hospitalData.length > 0) {
                let closestHospital = hospitalData[0];
                let closestDistance = calculateDistance(userLocation, closestHospital.geometry.location);
                for (let i = 1; i < hospitalData.length; i++) {
                    const hospital = hospitalData[i];
                    const distance = calculateDistance(userLocation, hospital.geometry.location);
                    if (distance < closestDistance) {
                        closestHospital = hospital;
                        closestDistance = distance;
                    }
                }
                setClosestHospital(closestHospital);
                console.log("Closest Hospital: ", closestHospital)
            }
        } catch (error) {
            console.error('Error fetching nearby hospitals:', error);
        }
    };
    

    const callClosestHospital = async () => {
        await fetchNearbyHospitals();
        if (closestHospital) {
            try {
                const response = await axios.get('https://res-q-google-api-proxy-server.vercel.app/call-closest-hospital', {
                    params: {
                        userLocation: `${userLocation.latitude},${userLocation.longitude}`
                    }
                });
                console.log(response.data)
                const hospitalNumber = response.data.hospitalNumber;
                console.log("hospital number",hospitalNumber)
                window.location.href = 'tel:' + hospitalNumber;
            } catch (error) {
                console.log("Error calling the closest hospital", error);
            }
        } else {
            setMessage("Couldn't get nearby hospital");
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }
    

    return (
        <section className={`bg-[#FAFAFA] z-0 fixed w-[100%]  py-[5px]  flex flex-col align-center justify-between h-[40vh] bottom-[60px] ${isVisible ? 'block' : 'hidden'}`}>
            <div onClick={emergencySpecial} className="flex align-center justify-between pl-[45%] " >
                <img className="" src={Circle3} alt="Emergency" /><p className="text-[12px] w-[40%]">Alert special ones</p>
            </div>
            <div onClick={emergencyCustomCentres} className="flex align-center justify-between pl-[45%]">
                <img className="" src={Circle2} alt="Emergency" /><p className="text-[12px] w-[40%]">Alert your custom health centre</p>
            </div>
            <div onClick={() => setConfirmStatus(!confirmStatus)} className="flex align-center justify-between pl-[45%]">
                <img className="" src={Circle} alt="Emergency" /><p className="text-[12px] w-[40%]">Alert nearby health centres</p>
            </div>
            <div className={`bg-white ${confirmStatus ? 'absolute' : 'hidden'} top-[20%] left-[0] p-[40px] rounded-[20px]`}>
                <h1>Alert nearby health centres?</h1>
                <div className="flex flex-row align-center justify-between">
                    <button className="active:bg-blue active:text-white border-blue rounded-xl bg-white mx-[5px] my-[15px] px-[50px] py-[5px] w-[40%] text-blue" onClick={() => setConfirmStatus(false)}><p>No</p></button>
                    <button onClick={callClosestHospital} className="active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[40%] text-white"><p>Yes</p></button>
                </div>
            </div>
            <footer className="text-white bg-blue text-center">
                {message}
            </footer>
        </section>
    )
}

export default EmergencyTab;
