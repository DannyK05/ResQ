import HomeLayout from "../containers/homeLayout"
import { Link } from "react-router-dom";
const Map =() =>{
    return(
        <main>
            <header className="flex justify-between align-center py-[5px] px-[5px]">
            <Link to="/home"><ion-icon name="arrow-back-outline"></ion-icon></Link><h1>Map</h1>  
            </header>
        </main>

        
    )
}

export default Map;