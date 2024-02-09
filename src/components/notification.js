import ActionLayout from "../containers/actionLayout"

const Notification = () => {
    return(
        <ActionLayout name ="Notification">
        <div className="flex flex-col justify-between align-center">
            <ion-icon className="text-blue" type="large" name="notifications-off-outline"></ion-icon>
            <p className="text-blue text-[24px] mx-[5px] mt-[40%]"> No notifications yet</p>
        </div>
        </ActionLayout>
    )
}


export default Notification;
