import Bot from "../assets/icons/MessageBot.svg";
import { Link } from 'react-router-dom';

const ActionBtn = () =>{
    return(
        <section className=" action px-[8px] mt-[30px] w-[100%] flex justify-between align-center">
            <Link to="/settings"><button className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"><ion-icon name="settings-outline"></ion-icon></button></Link>
            <Link to="/map"><button className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"><ion-icon name="map-outline"></ion-icon></button></Link>
            <Link to="/bot"><button className=" active:p-[6px] rounded-[100%] shadow shadow-black p-[4px]"><img alt="Bot" src={Bot}/></button></Link>
        </section>
    )
}

export default ActionBtn;