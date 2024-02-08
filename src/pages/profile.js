
import HomeLayout from "../containers/homeLayout"

const Profile =() =>{

    return(
        <HomeLayout>
            <header className="flex justify-center align-center py-[5px] px-[5px]">
            <h1>Profile</h1>  
            </header>
            <section className="mt-[10px]">
            <h1>Update your Info</h1>
            <form>
            <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[40%] "  type="text" name="firstname"  placeholder="First name" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[40%] " type="text" name="lastname"  placeholder="Last name" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " type="email" name="email"  placeholder="example@gmail.com" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " type="number" name="phonenumber"  placeholder="Phone number" required/> 
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " type="password" name="password"  placeholder="Password" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " type="password" placeholder="Confirm Password" required/>
                <br/>
                <button className=" form__button border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit"><h1>Update Info</h1></button>
            </form>
           
        </section>
    )
        </HomeLayout>

        
    )
}

export default Profile;