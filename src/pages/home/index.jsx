import Bot from "../../assets/imgs/Robot.png";
import Advice from "./components/Advice";
import HomeLayout from "../../layouts/HomeLayout";
import Carousel from "./components/Carousel";
import Permission from "../../assets/imgs/Permission.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //     error =>{
    //         setVisibility(true)
    //         console.log(error)
    //     }
    // )
    if ("geolocation" in navigator) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  }, []);

  const handleButtonClick = () => {
    setVisibility(false); // Update state when the button is clicked
  };

  return (
    <HomeLayout>
      <h1 className="ml-2 text-blue lg:text-xl">Welcome</h1>
      <Advice />
      <section className=" action px-[8px] mt-[30px] w-[100%] flex justify-between align-center">
        <Link to="/settings" aria-label="settings">
          <button
            className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"
            name="Settings"
          >
            <ion-icon name="settings-outline"></ion-icon>
          </button>
        </Link>
        <Link to="/map" aria-label="map">
          <button
            className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"
            name="Map button"
          >
            <ion-icon name="map-outline"></ion-icon>
          </button>
        </Link>
        <Link to="/bot" aria-label="bot">
          <button
            className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"
            name="Bot"
          >
            <img alt="Bot button" src={Bot} />
          </button>
        </Link>
      </section>
      <div
        className={`${
          visibility ? "" : "hidden"
        } absolute z-10 top-[40%] bg-white p-4 w-[90%] ml-4 shadow shadow-black  rounded-[20px]`}
      >
        <img
          className="w-3/4 mx-4 my-2"
          src={Permission}
          alt="Turn on location"
        />
        <h1 className="text-blue">Turn on permission and reload</h1>
        <p>Your location info helps us function better</p>
        <button
          onClick={() => {
            handleButtonClick();
          }}
          className="active:bg-blue active:text-white border-blue rounded-xl bg-white border-1 border-blue w-full shadow shadow-black my-2  px-[20px] py-[10px]  text-blue"
        >
          Ok
        </button>
      </div>
      <Carousel />
      {/* <div className="border-y p-2 text-sm font-medium text-blue mt-6 bg-white">
                <p>First aid tips</p>
            </div> */}
    </HomeLayout>
  );
};

export default Home;
