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
    const[formError, setError] = useState('')
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
            setError(error.code)
            
        }
    
    }
    const[resetFormVisibility, setReset] = useState(false)
    const toggleResetForm = () =>{
        setReset(!resetFormVisibility)
    }
    return(
        <section className="mt-[10px]">
            <header className="bg-blue">
                <span className="text-white">{formError}</span>
            </header>
            <h1><span className="text-blue">Welcome</span> Back</h1>
            <p>Login to your account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="email" value={logData.email} type="email" placeholder="example@gmail.com" required/> 
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="password" value={logData.password} type="password" placeholder="Password"  required/>
                <button className="active:bg-white active:text-blue  border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[40%] py-[5px] w-[95%] text-white"  type="submit"><h1>Login</h1></button>
            </form>
            <Link to="/signup"><p>Don't have an account? <span className="text-blue">SignUp</span></p></Link>
            <p onClick ={toggleResetForm} className="text-blue">Forget Password?</p>
            <section className={`${resetFormVisibility ? 'relative' : 'hidden'} w-[90vw] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}>    
                <h1>Manage your password <ion-icon onClick={toggleResetForm} size = "large" name="close-circle"></ion-icon></h1>
                    <form>
                        <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="email" placeholder="Input your email"/>
                        <button className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit">
                            <h1>Reset Password</h1>
                        </button>
                    </form> 
            </section>
        </section>
    )
}

export default LoginForm;