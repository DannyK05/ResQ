import ActionLayout from "../containers/actionLayout"
import ModPassword from "../components/modpassword"
import { useState } from "react";
const Settings =() =>{
    const [isVisible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!isVisible); // Toggle the visibility state
    };

    return(
        <ActionLayout name ="Settings">
            <p className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black"><ion-icon className="mx-[3px]" size= "large" name="heart"></ion-icon>Manage your Medical Info</p>
            <p className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black"><ion-icon className="mx-[3px]" size= "large" name="medkit"></ion-icon>Manage your Personal Health Centre Info</p>
            <p className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black"><ion-icon className="mx-[3px]" size= "large" name="people"></ion-icon>Manage Special Ones Contact Info </p>
            <p onClick = {toggleVisibility} className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black"><ion-icon className="px-[3px]" size="large" name="lock-closed"></ion-icon>Manage Password </p>
            <ModPassword visibility = {isVisible} Close ={toggleVisibility}/>
        </ActionLayout>

        
    )
}

export default Settings;
