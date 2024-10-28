import EmergencyTab from "../components/emergency";
import HomeHeader from "../components/homeheader";
import Navbar from "../components/nav";
import { useState } from "react";
const HomeLayout = (props) => {
  //to open and close the emergency tab
  const [isEmergencyTabVisible, setEmergencyTabVisible] = useState(false);

  const toggleEmergencyTab = () => {
    setEmergencyTabVisible(!isEmergencyTabVisible);
  };
  return (
    <main className="lg:flex lg:items-center lg:justify-center h-[100vh] w-full p-2 bg-[#FAFAFA]">
      <div className="w-full relative lg:shadow-lg lg:w-2/5 lg:rounded-lg">
        <HomeHeader />
        {props.children}
        <Navbar
          toggleEmergencyTab={toggleEmergencyTab}
          visibility={isEmergencyTabVisible}
          activeNav={true}
        />
        <EmergencyTab isVisible={isEmergencyTabVisible} />
      </div>
    </main>
  );
};
export default HomeLayout;
