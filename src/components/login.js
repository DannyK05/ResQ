import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setAuthenticated}) =>{
    
    const [logData, setData ] = useState(
        {
            email: "",
            password: ""
        }
    )
    // set Error
    const[formError, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setData({...logData,[e.target.name]: e.target.value.trim() })
    }
    const[formLoading, setLoading] = useState(false)
    // // Login fetch api function
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValidation(logData)){

            try {
                setLoading(true);
                const response = await fetch("https://resq-api-vl3u.onrender.com/api/v1/resQ/users/auth/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(logData)
                });
        
                if (response.ok) {
                    const { token } = await response.json();
                    localStorage.setItem('token', token);
                    setAuthenticated(true);
                    navigate('/home'); 
        
                } else {
                    console.log("Error: ", response)
                    throw new Error('Login failed'); // Or handle different status codes as per your API's response
                }
            } catch (error) {
                console.error('Error submitting form:', error.message);
                setError(error.message );
                setLoading(false);
                // clears error message after 3 seconds
                setTimeout(() => {
                    setError("");
                }, 3000);
            }
        }  
        else{
            console.log("Form validation failed")
            setTimeout(() =>{
                setError('')
            }, 2000)
            setTimeout(() =>{
                setError('')
            }, 2000)
        }     
    };

    // Function to display password reset form
    const[resetFormVisibility, setReset] = useState(false)
    const toggleResetForm = () =>{
        setReset(!resetFormVisibility)
    }

   
    // form validation
    const formValidation = (logData) => {
        let error = ""
        let valid = true

        if (logData.password.trim() === '') {
            error= "Input your password";
            valid = false
        }

        if (logData.email.trim() === '') {
            error = "Input your email";
            valid = false
        }else if (!/\S+@\S+\.\S+/.test(logData.email)) {
            error = 'Email is invalid';
            valid = false;
        }

        setError(error);
        return valid;

    }
   
    const handleLocationAndSubmit = (e) =>{
        e.preventDefault();
        handleSubmit(e);
    }
    return(
        <section className="mt-[10px]">
            <header className="bg-blue">
                <span className="text-white text-center"><p>{formError}</p></span>
            </header>
            <h1><span className="text-blue">Welcome</span> Back</h1>
            <p>Login to your account</p>
            <form onSubmit={handleLocationAndSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg hover:border-[#2592F6] active:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="email" value={logData.email} type="email" placeholder="example@gmail.com" /> 
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg hover:border-[#2592F6] active:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="password" value={logData.password} type="password" placeholder="Password" />
                <button className={`active:bg-white active:text-blue${formError !== "" ? "" :"active:bg-blue active:text-white"}  border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[40%] py-[5px] w-[95%] text-white`} disabled={formError !== ""} type="submit"><h1>{formLoading ? 'Loading...' : 'Login'}</h1></button>
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
