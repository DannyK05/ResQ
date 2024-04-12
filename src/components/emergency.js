import React, { useEffect, useState } from 'react';

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
                    setTimeout(() => {
                        setMessage("");
                    }, 3000);
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
            setMessage("Failed to retrieve info, check if you filled your info")
                setTimeout(() => {
                    setMessage("");
                }, 3000);
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
            setMessage("Failed to retrieve info, check if you filled your info")
            setTimeout(() => {
                setMessage("");
            }, 3000);
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
            setMessage("Fetching Nearby Hospital")
            const response = await fetch(`https://resq-google-api-proxy-server-1.onrender.com/maps/api/place/nearbysearch/json?location=${userLocation.latitude},${userLocation.longitude}&radius=10000&type=hospital&key=AIzaSyA-eimkkqp9OSHxHlKuScXbyz9Cr-dgqf0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
            const responseData = await response.json();
            console.log("Response: ", responseData);
            const hospitalData = responseData.results;
    
            if (hospitalData) {
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
                    setTimeout(() => {
                        setMessage("");
                    }, 3000);
                    setClosestHospital(closestHospital);
                    console.log("Closest Hospital: ", closestHospital);
                }
            }
            
        } catch (error) {
            console.error('Error fetching nearby hospitals:', error);
        }
    };
    
    const callClosestHospital = async () => {
        setConfirmStatus(!confirmStatus);
        await fetchNearbyHospitals();
            try {
                setMessage("Getting the contact number of closest hospital to you")
                const response = await fetch(`https://resq-google-api-proxy-server-1.onrender.com/call-closest-hospital?userLocation=${userLocation.latitude},${userLocation.longitude}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
                console.log("Response ", response);
                const responseData = await response.json();
                const hospitalNumber = responseData.hospitalNumber;
                console.log("hospital number", hospitalNumber);
                setTimeout(() => {
                    setMessage("");
                }, 3000);
                window.location.href = 'tel:' + hospitalNumber;
                
            } catch (error) {
                console.log("Error calling the closest hospital", error);
                setMessage("Couldn't get nearby hospital, Please Try again");
                setTimeout(() => {
                setMessage("");
            }, 3000);
            }
        
            
        }


    return (
        <section className={`bg-[#fff] z-0 fixed w-full  py-2  flex flex-col align-center justify-between h-[40vh] bottom-[70px] ${isVisible ? 'block' : 'hidden'}`}>
            <div onClick={emergencySpecial} className="flex align-center justify-between pl-[45%] active:bg-white " >
                <div className=" rounded-full border-[1px] border-blue active:border-[#6db6fa] p-4">
                        
                </div>
                <p className="text-[12px] w-[40%]">Alert special ones</p>
            </div>

            <div onClick={emergencyCustomCentres} className="flex align-center justify-between pl-[45%] active:bg-white">
                <div className=" rounded-full bg-blue active:bg-[#6db6fa] p-4">

                </div>
                <p className="text-[12px] w-[40%]">Alert custom health centre</p>
            </div>

            <div onClick={() => setConfirmStatus(!confirmStatus)} className="flex align-center justify-between pl-[45%] active:bg-white">
                <div className=" rounded-full border-[1px] border-blue p-1">
                    <div className=" rounded-full active:bg-[#6db6fa] bg-blue p-4">

                    </div>
                </div>
                <p className="text-[12px] w-[40%]">Alert nearby health centres</p>
            </div>
            
            <div className={`bg-white ${confirmStatus ? 'absolute' : 'hidden'} top-[20%] left-[0] p-[40px] rounded-[20px]`}>
                <h1>Alert nearby health centres?</h1>
                <p className='text-blue text-xs'>Give permission to use your location</p>
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
