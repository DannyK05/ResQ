import axios from "axios"
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
    const[formError, setError] = useState({
        email : '',
        password:'',
        form : ''
    })
    const history = useNavigate()
    const handleChange = (e) =>{
        setData({...logData,[e.target.name]: e.target.value.trim() })
    }
    const[formLoading, setLoading] = useState(false)
    // // Login fetch api function
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValidation(logData)){

            try {
                setLoading(true)
                const response = await axios.post("https://resq-api-5j6r.onrender.com/api/v1/resQ/users/auth/login", logData)
                const {token} = response.data
                history("/home")
                localStorage.setItem('token', token)
                setAuthenticated(true)
           
            } catch (error) {
                console.error("Error submitting form:", error);
                setError({...formError, form: error.message });
                setLoading(false)
                // clears error message after 3 seconds
                setTimeout(() =>{
                    setError({...formError, form: "" })
                }, 3000)
            }
        }  
        else{
            console.log("Form validation failed")
            setTimeout(() =>{
                setError({...formError, password: ''})
            }, 2000)
            setTimeout(() =>{
                setError({...formError, email: ''})
            }, 2000)
        }     
    };

    // Function to display password reset form
    const[resetFormVisibility, setReset] = useState(false)
    const toggleResetForm = () =>{
        setReset(!resetFormVisibility)
    }

    // To get user location 
    const[userLocation, setLocation] = useState({
        userLatitude : '',
        userLongitude: ''
    })
    const getUserLocation = () => {
        if ("geolocation" in navigator) {
            // If supported, ask for the user's location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // If the user allows the location request, you can access the latitude and longitude
                    const { latitude, longitude } = position.coords;
                    setLocation({ 
                        userLatitude: latitude,
                        userLongitude: longitude
                    })
                },
                (error) => {
                    // If the user denies the location request 
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            // If Geolocation is not supported by the browser
            console.error("Geolocation is not supported by this browser.");
        }
        
    }
    // form validation
    const formValidation = (logData) => {
        const errors = {};
        let valid = true

        if (logData.password.trim() === '') {
            errors.password = "Input your password";
            valid = false
        }

        if (logData.email.trim() === '') {
            errors.email = "Input your email";
            valid = false
        }else if (!/\S+@\S+\.\S+/.test(logData.email)) {
            errors.email = 'Email is invalid';
            valid = false;
        }

        setError({...formError, ...errors });
        return valid;

    }
   
    const handleLocationAndSubmit = (e) =>{
        e.preventDefault();
        handleSubmit(e);
        getUserLocation();
    }
    return(
        <section className="mt-[10px]">
            <header className="bg-blue">
                <span className="text-white text-center"><p>{formError.form}</p></span>
            </header>
            <h1><span className="text-blue">Welcome</span> Back</h1>
            <p>Login to your account</p>
            <form onSubmit={handleLocationAndSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="email" value={logData.email} type="email" placeholder="example@gmail.com" /> 
                <div className={`${formError.email ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.email}</p></div>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange} name="password" value={logData.password} type="password" placeholder="Password" />
                <div className={`${formError.password ? 'bg-blue p-[2px]' :''}  text-white text-center`}><p>{formError.password}</p></div>
                <button className="active:bg-white active:text-blue  border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[40%] py-[5px] w-[95%] text-white" disabled={formLoading ? true : false} type="submit"><h1>{formLoading ? 'Loading...' : 'Login'}</h1></button>
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
