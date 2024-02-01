import Settings from "../assets/icons/Settings.svg";
import Map from "../assets/icons/MapMarker.svg";
import Bot from "../assets/icons/MessageBot.svg";
import { Link } from 'react-router-dom';

const ActionBtn = () =>{
    return(
        <section className="px-[8px] mt-[30px] w-[100%] flex justify-between align-center">
            <Link to="/settings"><button className="rounded-[100%] shadow shadow-black p-[4px]"><img src={Settings}/></button></Link>
            <Link to="/map"><button className="rounded-[100%] shadow shadow-black p-[4px]"><img src={Map}/></button></Link>
            <Link to="/bot"><button className="rounded-[100%] shadow shadow-black p-[4px]"><img src={Bot}/></button></Link>
        </section>
    )
}

export default ActionBtn;