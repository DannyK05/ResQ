import Notification from "../assets/icons/Notification.svg";
import { Link } from 'react-router-dom';

const HomeHeader = () =>{
    return(
        <header className="flex justify-between align-center py-[5px]">
           <Link to="/home"> <h1>Res<span className="text-blue">Q</span></h1></Link>
            <Link to="/notification"><span><img className="w-2/3" src={Notification}/></span></Link>
        </header>
    )
}

export default HomeHeader;