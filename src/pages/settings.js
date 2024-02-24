import ActionLayout from "../containers/actionLayout"
import ModPassword from "../components/modpassword"
import ModMedical from "../components/modmedical"
import ModCentres from "../components/modcentres"
import ModSpecial from "../components/modspecial"
import { useState } from "react";
import { Link } from 'react-router-dom';
const Settings =() =>{
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [isMedicalVisible, setMedicalVisibility] = useState(false);
    const [isCentreVisible, setCentreVisibility] = useState(false);
    const [isSpecialVisible, setSpecialVisibility] = useState(false);

    const logOut = () =>{
        localStorage.removeItem('token')
        
    }

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible); // Toggle the visibility state of the password
    };
     const toggleMedicalVisibility = () => {
        setMedicalVisibility(!isMedicalVisible); // Toggle the visibility state of the medical
    };
     const toggleCentreVisibility = () => {
        setCentreVisibility(!isCentreVisible); // Toggle the visibility state of the centres
    };
     const toggleSpecialVisibility = () => {
        setSpecialVisibility(!isSpecialVisible); // Toggle the visibility state of the special
    };

    return(
        <ActionLayout name ="Settings">
            <div onClick = {toggleMedicalVisibility} className="border-b-[1px] active:bg-[#FAFAFA] flex items-center border-b-[#D9D9D9] p-[10px] text-black">
            <span className="mr-[3px] text-center"><ion-icon size= "large" name="heart"></ion-icon></span>
            <p>Manage your Medical Info</p>
            </div>
            
            <div onClick = {toggleCentreVisibility} className="border-b-[1px] active:bg-[#FAFAFA] flex items-center border-b-[#D9D9D9] p-[10px] text-black">
            <span className="mr-[3px] text-center"><ion-icon  size= "large" name="medkit"></ion-icon></span>
            <p>Manage your Custom Health Centre </p>
            </div>

            <div onClick = {toggleSpecialVisibility} className="border-b-[1px] active:bg-[#FAFAFA] flex items-center border-b-[#D9D9D9] p-[10px] text-black">
            <span className="mr-[3px] text-center"><ion-icon  size= "large" name="people"></ion-icon></span>
            <p>Manage Special Ones Contact Info </p>
            </div>

            <div onClick = {togglePasswordVisibility} className="border-b-[1px] active:bg-[#FAFAFA] flex items-center border-b-[#D9D9D9] p-[10px] text-black">
            <span className="mr-[3px] text-center"><ion-icon  size="large" name="lock-closed"></ion-icon></span>
            <p>Manage Password </p>
            </div>
            <Link to="/"><div onClick = {logOut}  className="border-b-[1px] active:bg-[#FAFAFA] flex items-center border-b-[#D9D9D9] p-[10px] text-black">
            <span className="mr-[3px] text-center"><ion-icon size="large" name="log-out-outline"></ion-icon></span>
            <p>Logout </p>
            </div></Link>
            <ModPassword visibility = {isPasswordVisible} Close ={togglePasswordVisibility}/>
            <ModCentres visibility = {isCentreVisible} Close ={toggleCentreVisibility}/>
            <ModMedical visibility = {isMedicalVisible} Close ={toggleMedicalVisibility}/>
            <ModSpecial visibility = {isSpecialVisible} Close ={toggleSpecialVisibility}/>
        </ActionLayout>

        
    )
}

export default Settings;
