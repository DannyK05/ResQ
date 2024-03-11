import Notification from "../assets/icons/Notification.svg";
import { Link } from 'react-router-dom';

const HomeHeader = () =>{
    return(
        <header className="flex justify-between align-center w-[100%] py-[5px] bg-white  mb-[8px]">
           <Link to="/home"> <h1>Res<span className="text-blue">Q</span></h1></Link>
            <Link to="/notification"><ion-icon name="notifications-outline"></ion-icon></Link>
        </header>
    )
}

export default HomeHeader;