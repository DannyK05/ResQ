import Settings from "../assets/icons/Settings.svg";
import Map from "../assets/icons/MapMarker.svg";
import Bot from "../assets/icons/MessageBot.svg";
import { Link } from 'react-router-dom';

const ActionBtn = () =>{
    return(
        <section className="px-[8px] mt-[30px] w-[100%] flex justify-between align-center">
            <Link to="/settings"><button className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"><img alt="Settings" src={Settings}/></button></Link>
            <Link to="/map"><button className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"><img alt="Map" src={Map}/></button></Link>
            <Link to="/bot"><button className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"><img alt="Bot" src={Bot}/></button></Link>
        </section>
    )
}

export default ActionBtn;