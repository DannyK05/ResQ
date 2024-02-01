import Notification from "../assets/icons/Notification.svg";
import { Link } from 'react-router-dom';

const HomeHeader = () =>{
    return(
        <header className="flex justify-between align-center w-[100%] py-[5px]  mb-[8px]">
           <Link to="/home"> <h1>Res<span className="text-blue">Q</span></h1></Link>
            <Link to="/notification"><img className="w-2/3" src={Notification}/></Link>
        </header>
    )
}

export default HomeHeader;