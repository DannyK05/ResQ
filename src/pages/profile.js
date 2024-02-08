import axios from "axios"
import HomeLayout from "../containers/homeLayout";
import {useEffect} from "react";

const Profile =() =>{
// To fetch the current user data
    const fetchUserData = async () =>{
        try{
            const response = await axios.get("https://resq-api-5j6r.onrender.com/api/v1/resQ/users/auth/signup");
        }
        catch (err){
            console.log("There was an error getting data", err)
        }
    }
    // Call fetchUserData when the component mounts
    useEffect(() => {
        fetchUserData();
    }, []);
    
    return(
        <HomeLayout>
            <header className="flex justify-center align-center py-[5px] px-[5px]">
            <h1>Profile</h1>  
            </header>
            <section className="mt-[10px]">
            <h1>Update your Info</h1>
            <form>
            <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[40%] "  type="text" name="firstname"  placeholder={response.data.firstame} required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[40%] " type="text" name="lastname"  placeholder={response.data.lastname} required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[80%] " type="email" name="email"  placeholder={response.data.email} required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[80%] " type="number" name="phonenumber"  placeholder={response.data.phonenumber} required/> 
                <br/>
                <button className=" form__button border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit"><h1>Update Info</h1></button>
            </form>
           
        </section>
    
        </HomeLayout>

        
    )
}

export default Profile;
