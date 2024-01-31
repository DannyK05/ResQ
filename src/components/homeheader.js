import Notification from "../assets/icons/Notification.svg";
const HomeHeader = () =>{
    return(
        <header className="flex justify-between align-center py-[5px]">
            <h1>Res<span className="text-blue">Q</span></h1>
            <span><img className="w-2/3" src={Notification}/></span>
        </header>
    )
}

export default HomeHeader;