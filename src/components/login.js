import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () =>{
    const [logData, setData ] = useState(
        {
            email: "",
            password: ""
        }
    )

    const history = useNavigate()
    const handleChange = (e) =>{
        setData({...logData,[e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("https://resq-api-5j6r.onrender.com/api/v1/resQ/users/auth/login", logData);
            console.log("Logged in successfully: ", response.data);
            history.push('/home')
        } catch (error) {
            console.log("Incorrect email or password: ", error)
        }
    }
    return(
        <section className="mt-[10px]">
            <h1><span className="text-blue">Welcome</span> Back</h1>
            <p>Login to your account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="email" value={logData.email} type="email" placeholder="example@gmail.com" required/> 
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="password" value={logData.password} type="password" placeholder="Password"  required/>
                <submit className="form__button  border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[40%] py-[5px] w-[95%] text-white"  type="submit"><h1>Login</h1></submit>
            </form>
            <Link to="/signup"><p>Don't have an account? <span className="text-blue">SignUp</span></p></Link>
        </section>
    )
}

export default LoginForm;