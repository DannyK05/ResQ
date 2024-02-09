import Home from "../assets/icons/Home.svg";
import ActiveHome from "../assets/icons/Home-1.svg";
import Close from "../assets/icons/Close.svg";
import Profile from "../assets/icons/MaleUser.svg";
import ActiveProfile from "../assets/icons/MaleUser.svg";
import Bluebtn from "../assets/icons/Group6.svg";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleEmergencyTab, visibility}) => {
    return(
        <nav className="fixed w-[100%] bottom-0">
            <ul className="flex w-[100%] justify-between align-center p-[5px]">
               <Link to="/home"> <li><img className="" alt="home" src={ActiveHome}/></li></Link>
                <li><img className="" alt="Emergency button" onClick={toggleEmergencyTab} src={visibility ? Bluebtn : Close}/></li>
               <Link to="/profile"><li><img className="" alt="profile" src={Profile}/></li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;
