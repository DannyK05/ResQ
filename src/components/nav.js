import Home from "../assets/icons/Home.svg";
import ActiveHome from "../assets/icons/Home-1.svg";
import Close from "../assets/icons/Close.svg";
import Profile from "../assets/icons/MaleUser.svg";
import ActiveProfile from "../assets/icons/MaleUser.svg";
import Bluebtn from "../assets/icons/Group6.svg";

const Navbar = () => {
    return(
        <nav className="fixed w-[100%] bottom-0">
            <ul className="flex w-[100%] justify-between align-center p-[5px]">
                <li><img className="" src={ActiveHome}/></li>
                <li><img className="" src={Bluebtn}/></li>
                <li><img className="" src={Profile}/></li>
            </ul>
        </nav>
    )
}

export default Navbar;