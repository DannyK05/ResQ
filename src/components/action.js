import Settings from "../assets/icons/Settings.svg";
import Map from "../assets/icons/MapMarker.svg";
import Bot from "../assets/icons/MessageBot.svg";


const ActionBtn = () =>{
    return(
        <section className="px-[8px] m-auto w-[100%] flex justify-between align-center">
            <button className="rounded-[100%] shadow shadow-black p-[2px]"><img src={Settings}/></button>
            <button className="rounded-[100%] shadow shadow-black p-[2px]"><img src={Map}/></button>
            <button className="rounded-[100%] shadow shadow-black p-[2px]"><img src={Bot}/></button>
        </section>
    )
}

export default ActionBtn;