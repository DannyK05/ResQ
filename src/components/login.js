import axios from "axios";
import { useState } from "react";


const LoginForm = () =>{
    const [logData, setData ] = useState(
        {
            email: "",
            password: ""
        }
    )
    const handleChange = (e) =>{
        setData({...logData,[e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("endpoint", logData);
            console.log("Logged in successfully: ", response.data);
            
        } catch (error) {
            console.log("Incorrect email or password: ", error)
        }
    }
    return(
        <section>
            <p>Login to your account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="email" value={logData.email} type="email" placeholder="example@gmail.com" required/> 
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="password" value={logData.password} type="password" placeholder="Password"  required/>
                <input className="form__button  border-neutral-400 rounded bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white"  type="submit" value="LOGIN"/>
            </form>
            <p>Don't have an account? SignUp</p>
        </section>
    )
}

export default LoginForm;