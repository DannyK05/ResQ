import Home from "../assets/icons/Home-1.svg";
import ActiveHome from "../assets/icons/Home.svg";
import Close from "../assets/icons/Close.svg";
import Profile from "../assets/icons/MaleUser.svg";
import ActiveProfile from "../assets/icons/MaleUser-1.svg";
import Bluebtn from "../assets/icons/Group6.svg";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleEmergencyTab, visibility, activeNav}) => {
    return(
        <nav className="fixed w-[100%] bottom-0">
            <ul className="flex w-[100%] justify-between align-center p-[5px]">
               <Link to="/home" > <li><img  alt="home" src={activeNav ? ActiveHome : Home}/></li></Link>
                <li><img className="" alt="Emergency button" onClick={toggleEmergencyTab} src={visibility ? Close : Bluebtn}/></li>
               <Link to="/profile" ><li ><img  alt="profile" src={ activeNav ? Profile : ActiveProfile}/></li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;
