import Circle from "../assets/icons/Group6.svg"
import Circle2 from "../assets/icons/Eclipse3.svg"
import Circle3 from "../assets/icons/Eclipse4.svg"
const EmergencyTab = ({isVisible}) => {
    return(
        <section className={`bg-[#FAFAFA] z-0 fixed w-[100%]  py-[5px]  flex flex-col align-center justify-between h-[40vh] bottom-[60px] ${isVisible ? 'block' : 'hidden'}`}>
            <div className="flex align-center justify-between pl-[45%] " >
            <img className="" src={Circle3} alt="Emergency"/><p className="text-[12px] w-[40%]">Alert special ones</p>
            </div>
            <div className="flex align-center justify-between pl-[45%]">
            <img className="" src={Circle2} alt="Emergency"/><p className="text-[12px] w-[40%]">Alert your custom health centre</p>
            </div>
            <div className="flex align-center justify-between pl-[45%]">
                <img className="" src={Circle} alt="Emergency"/><p className="text-[12px] w-[40%]">Alert nearby health centres</p>
            </div>
        </section>
    )
}


export default EmergencyTab;
