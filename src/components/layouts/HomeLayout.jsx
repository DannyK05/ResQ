import { Link } from "react-router-dom";
import EmergencyTab from "../../pages/home/components/Emergency";
import Navbar from "../../components/ui/Navbar";
import { useState } from "react";
const HomeLayout = (props) => {
  //to open and close the emergency tab
  const [isEmergencyTabVisible, setEmergencyTabVisible] = useState(false);

  const toggleEmergencyTab = () => {
    setEmergencyTabVisible(!isEmergencyTabVisible);
  };

  return (
    <main className="lg:flex lg:items-center lg:justify-center h-[100vh] w-full bg-[#FAFAFA]">
      <div className="w-full h-full relative lg:shadow-lg lg:w-1/2 lg:rounded-lg">
        <header className="flex justify-between items-center border-b border-[#fafa] w-full p-2 bg-white mb-4">
          <Link to="/">
            <h1 className="text-xl">
              Res<span className="text-blue">Q</span>
            </h1>
          </Link>

          {/*Change Link address to home when Login page is ready*/}
          <Link to="/notification" aria-label="notifications">
            <ion-icon name="notifications-outline"></ion-icon>
          </Link>
        </header>

        <div className="px-4">{props.children}</div>

        <Navbar
          className="w-full bg-blue z-100"
          toggleEmergencyTab={toggleEmergencyTab}
          visibility={isEmergencyTabVisible}
          activeNav={true}
        />

        <EmergencyTab
          className="w-full fixed bottom-[69px]"
          isVisible={isEmergencyTabVisible}
        />
      </div>
    </main>
  );
};
export default HomeLayout;
