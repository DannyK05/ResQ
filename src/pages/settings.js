import ActionLayout from "../containers/actionLayout"

const Settings =() =>{
    return(
        <ActionLayout name ="Settings">
            <p className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black">Manage your Medical Info <ion-icon name="arrow-forward-outline"></ion-icon></p>
            <p className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black">Manage your Personal Health Centre Info <ion-icon name="arrow-forward-outline"></ion-icon></p>
            <p className="border-b-[1px] border-b-[#D9D9D9] p-[10px] text-black">Manage Special Ones Contact Info <ion-icon name="arrow-forward-outline"></ion-icon></p>
        </ActionLayout>

        
    )
}

export default Settings;