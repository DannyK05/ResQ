import ActionLayout from "../containers/actionLayout"

const Notification = () => {
    return(
        <ActionLayout name ="Notification">
        <ion-icon className="text-blue text-[24px]" name="notifications-off-outline"></ion-icon>
            <p className="text-blue text-[24px] mx-[5px] mt-[40%]"> No notifications yet</p>
        </ActionLayout>
    )
}


export default Notification;
