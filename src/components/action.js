import Bot from "../assets/icons/MessageBot.svg";
import { Link } from "react-router-dom";

const ActionBtn = () => {
  return (
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
  );
};

export default ActionBtn;
