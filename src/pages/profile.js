import { Link } from "react-router-dom";
import HomeLayout from "../containers/homeLayout"

const Profile =() =>{
    return(
        <main>
            <header className="flex justify-between align-center py-[5px] px-[5px]">
            <Link to="/home"><ion-icon name="arrow-back-outline"></ion-icon></Link><h1>Profile</h1>  
            </header>
        </main>

        
    )
}

export default Profile;