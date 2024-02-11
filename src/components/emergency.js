import Circle from "../assets/icons/Group6.svg";
import Circle2 from "../assets/icons/Ellipse3.svg";
import Circle3 from "../assets/icons/Ellipse4.svg";
import { useState } from "react";
const EmergencyTab = ({isVisible}) => {
    //confirm emergency function
        const [confirmStatus, setConfirmStaus] = useState(false)
        const [message, setMessage] = useState('');

        const toggleConfirmStatus = () => {
            setConfirmStaus(!confirmStatus)
        }
       
    //send emergency message to special ones
        const[specialData, setSpecialData] = useState([])
        const emergencySpecial = async () => {
            // retrieve the special ones info
            try {
                const response = await fetch('api')
                if(response.ok){
                    const data = await response.json
                    setSpecialData = data
                }
                else {
                    console.error("Error fetching data:", response.statusText);
                  }
               
            } catch (error) {
                console.log ('Failed to retrieve special ones info',error)
            }
            // call special person number
            window.location.href = 'tel:' + specialData.phonenumber

            // send email to special person
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // Include any necessary data to send to the backend
                        // For example, recipient email address, message content, etc.
                    })
                });
    
                if (response.ok) {
                    setMessage('Email sent successfully!');
                } else {
                    setMessage('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setMessage('Error sending email');
            } 
        

        }    
        
        //Emergency for custom health centres
        const[customCentres, setCustomCentres] = useState({})
        const emergencyCustomCentres = async () => {
            try {
                const response = await fetch('api')
                if(response.ok){
                    const data = await response.json();
                    setCustomCentres()
                } 
                else{
                    console.log("Couldn't retrieve centre data: ", response.statusText)
                }
            } catch (error) {
                console.log(error)
            }
            //send email to custom centre
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // Include any necessary data to send to the backend
                        // For example, recipient email address, message content, etc.
                    })
                });
    
                if (response.ok) {
                    setMessage('Email sent successfully to custom centre!');
                } else {
                    setMessage('Failed to send email to custom centre');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setMessage('Error sending email');
            } 
        
            // call center 
            window.location.href = 'tel:' + customCentres.phonenumber
        
        }    
          


    return(
        <section className={`bg-[#FAFAFA] z-0 fixed w-[100%]  py-[5px]  flex flex-col align-center justify-between h-[40vh] bottom-[60px] ${isVisible ? 'block' : 'hidden'}`}>
            <div onClick={emergencySpecial} className="flex align-center justify-between pl-[45%] " >
            <img className="" src={Circle3} alt="Emergency"/><p className="text-[12px] w-[40%]">Alert special ones</p>
            </div>
            <div onClick={emergencyCustomCentres} className="flex align-center justify-between pl-[45%]">
            <img className="" src={Circle2} alt="Emergency"/><p className="text-[12px] w-[40%]">Alert your custom health centre</p>
            </div>
            <div onClick={toggleConfirmStatus} className="flex align-center justify-between pl-[45%]">
                <img className="" src={Circle} alt="Emergency"/><p className="text-[12px] w-[40%]">Alert nearby health centres</p>
            </div>
            <div className={`bg-white ${confirmStatus ? 'absolute' : 'hidden'} top-[20%] left-[40%] p-[40px] rounded-[20px]`}>
                <h1>Alert nearby health centres?</h1>
                <div className="flex flex-row align-center justify-between">
                <button className=" active:bg-blue active:text-white border-blue rounded-xl bg-white mx-[5px] my-[15px] px-[50px] py-[5px] w-[40%] text-blue" onClick={toggleConfirmStatus}><p>No</p></button>
                <button className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[40%] text-white"><p>Yes</p></button>
                </div>
            </div>
            <footer className="text-white bg-blue text-center">
                {message}
            </footer>
        </section>
    )
}


export default EmergencyTab;
