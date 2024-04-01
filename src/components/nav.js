import { Link } from 'react-router-dom';

const Navbar = ({ toggleEmergencyTab, visibility, activeNav}) => {
    return(
        <nav className="fixed w-[100%] z-10 bg-white border-t border-slate-100 bottom-0 px-2 py-3">
            <ul className="flex w-[100%] justify-between align-center ">
               <Link to="/home" > <li><ion-icon name={activeNav ? "home" : "home-outline"}></ion-icon></li></Link>

                <li>{visibility ? 
                <ion-icon onClick={toggleEmergencyTab} name="close-circle-outline"></ion-icon> 
                : 
                <div onClick={toggleEmergencyTab} className=" rounded-full border-[1px] border-blue p-2">
                    <div className=" rounded-full bg-blue p-5 active:bg-[#6db6fa]">

                    </div>
                </div>  }</li>
                
               <Link to="/profile" ><li ><ion-icon name={activeNav ? "person-outline" : "person"}></ion-icon></li></Link>
            </ul>
        </nav>
        
    )
}


export default Navbar;
