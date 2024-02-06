import Circle from "../assets/icons/Group6.svg"
const EmergencyTab = ({isVisible}) => {
    return(
        <section className={`bg-[#FAFAFA] z-0 fixed w-[100%] px-[30px] py-[5px] flex flex-col align-center justify-between h-[40vh] bottom-[60px] ${isVisible ? 'block' : 'hidden'}`}>
            <div className="flex align-center justify-between" >
            <img className="" src={Circle}/><p className="text-[12px]">Alert special ones</p>
            </div>
            <div className="flex align-center justify-between">
            <img className="" src={Circle}/><p className="text-[12px]">Alert your custom health centre</p>
            </div>
            <div className="flex align-center justify-between">
                <img className="" src={Circle}/><p className="text-[12px]">Alert nearby health centres</p>
            </div>
        </section>
    )
}


export default EmergencyTab;