import Advice from "../components/advice";
import ActionBtn from "../components/action";
import  HomeLayout from "../containers/homeLayout";
import Carousel from "../components/carousel";
import Permission from "../assets/imgs/Permission.png"
import { useEffect, useState } from "react";
const Home = () => {
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ()=>{
                setVisibility(false);
            }
        )
            
    }, []);

    const handleButtonClick = () => {
        setVisibility(false); // Update state when the button is clicked
    };
    
    return (
        <HomeLayout>
            <h1>Welcome</h1>
            <Advice />
            <ActionBtn />
            <div className={`${visibility ? '' : 'hidden'} absolute z-10 top-[40%] bg-white p-4 w-[90%] ml-4 shadow shadow-black  rounded-[20px]`}>
                <img className="w-3/4 mx-4 my-2" src={Permission} alt="Turn on location" />
                <h1 className="text-blue">Turn on permission and reload</h1>
                <p>Your location info helps us function better</p>
                <button onClick={handleButtonClick} className="active:bg-blue active:text-white border-blue rounded-xl bg-white border-1 border-blue w-full shadow shadow-black my-2  px-[20px] py-[10px]  text-blue">
                    Ok
                </button>
            </div>
            <Carousel />
        </HomeLayout>
    );
}

export default Home;
