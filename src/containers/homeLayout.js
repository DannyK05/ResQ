import EmergencyTab from "../components/emergency";
import HomeHeader from "../components/homeheader";
import Navbar from "../components/nav";
import { useState } from "react";
const HomeLayout = (props) =>{
    //to open and close the emergency tab
    const [isEmergencyTabVisible, setEmergencyTabVisible] = useState(false);

    const toggleEmergencyTab = () => {
        setEmergencyTabVisible(!isEmergencyTabVisible);
    }
    return(
        <main className="h-[100vh] w-[100vw] px-[5px]">
            <HomeHeader/>
            {props.children}
            <Navbar toggleEmergencyTab={toggleEmergencyTab} visibility ={isEmergencyTabVisible} />
            <EmergencyTab isVisible={isEmergencyTabVisible} />

        </main>
    )
}
export default HomeLayout
