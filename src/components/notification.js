import ActionLayout from "../containers/actionLayout"

const Notification = () => {
    return(
        <ActionLayout name ="Notification">
        <div className="flex flex-col justify-center align-center h-[100%]">
            <span className="text-[64px] text-center"><ion-icon  name="notifications-off-outline"></ion-icon></span>
        </div>
        </ActionLayout>
    )
}


export default Notification;
