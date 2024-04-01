import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SignupForm = () =>{
    //This for storing the data inputted
    const [userData, setUser] =useState({
        firstName: "",
        lastName: "",
        email: "" ,
        phoneNumber: "",
        password: "",
        passwordConfirm: ""
    })
    const[formError, setError] = useState("") //storing error messages
    //Form validation

    const formValidation = (userData) => {
        let error = ""
        let valid = true 
        
        if (userData.phoneNumber.trim() === ""){
            error = "Input your phone number"
            valid = false;
        }

        if (userData.password.trim() === "") {
            error = "Input password"
            valid = false;
        }else if (userData.password.trim() !== userData.passwordConfirm.trim()){
            error = "Password do not match"
            valid = false;
        }
        if(userData.password.length > 8){
            error = "Password must be at least 8 characters"
            valid = false;
        }

        if (userData.email.trim() === ""){
            error = "Input your email"
            valid = false;
        }else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            error = 'Email is invalid';
            valid = false;
        }

        if (userData.firstName.trim() === "" || userData.lastName.trim() === ""){
            error = "Input your name"
            valid = false;
        }
        
        
        setError(error) //set the error message to the error given after validation
        
        return valid

    }
    const navigate = useNavigate()
    const handleChange = (e) => {
        //setting assigning the data inputted to the object
        setUser({ ...userData, [e.target.name]: e.target.value.trim() });
      };
      //loading status
      const[formLoading, setLoading] = useState(false)
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValidation(userData)){
            try {
                setLoading(true);
                const response = await axios.post("https://resq-api-vl3u.onrender.com/api/v1/resQ/users/auth/signup", userData );
                console.log("Signup submitted: ", response);
                navigate("/medical");
                      
            } catch (error) {
                console.error('Error submitting form:', error);
                setError(formError);
                setLoading(false);
            
                setTimeout(() =>{
                    setError('')
                }, 3000);
            }
            
        }
        else{
            console.log("Form validation failed")
            setTimeout(() =>{
                setError(formError)
            }, 2000)
            setTimeout(() =>{
                setError(formError)
            }, 2000)
            setTimeout(() =>{
                setError(formError)
            }, 2000)
            setTimeout(() =>{
                setError(formError)
            }, 2000)
        }
    };

    return(
        <section>
            <header className={`${formError ? "bg-blue text-center px-2 py-1" : "" }`}>
                <span className="text-white">{formError}</span>
            </header>
            <h1><span className="text-blue">Get</span> Started</h1>
            <p className="w-[100%]">Input your details to create an account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[40%] " onChange={handleChange} type="text" name="firstName" value={userData.firstName} placeholder="First name" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[40%] " onChange={handleChange} type="text" name="lastName" value={userData.lastName} placeholder="Last name" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="email" name="email" value={userData.email} placeholder="example@gmail.com" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="tel" name="phoneNumber" value={userData.phoneNumber} placeholder="Phone number" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="password" name="password" value={userData.password} placeholder="Password" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="password" name="passwordConfirm" placeholder="Confirm Password"  />
                <br/>
                <input className="border-neutral-400 border-2 border-[#E7DDDD] p-[5px] " type="checkbox" required/> <label>I have read and accepted the terms and conditions.</label>
                <br/>
                <button className={`active:bg-white ${formError !== "" ? "" :"active:bg-white active:text-blue"} active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white`} disabled={formError !== ""} type="submit"><h1>{formLoading ? 'Loading...' : 'continue'}</h1></button>
            </form>
            <Link to="/"><p>Already have an account?<span className="text-blue">Login</span></p></Link>
        </section>
    )
}


export default SignupForm;
