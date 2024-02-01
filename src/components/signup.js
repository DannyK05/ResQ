import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () =>{
    //This for storing the data inputted
    const [userData, setUser] =useState({
        firstname: "",
        lastname: "",
        email: "" ,
        phonenumber: "",
        password: ""
    })
    const history = useNavigate()
    const handleChange = (e) => {
        //setting assigning the data inputted to the object
        setUser({ ...userData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("endpoint", userData);
            console.log('Form submitted successfully:', response.data);
            history.push("/medical")
            // Handle success, show message, reset form, etc.
            } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show error message, etc.
            }
      };

    return(
        <section>
            <p className="w-[100%]">Input your details to create an account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[40%] " onChange={handleChange} type="text" name="firstname" value={userData.firstname} placeholder="First name" required/>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[40%] " onChange={handleChange}type="text" name="lastname" value={userData.lastname} placeholder="Last name" required/>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange}type="email" name="email" value={userData.email} placeholder="example@gmail.com" required/>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange}type="number" name="phonenumber" value={userData.phonenumber} placeholder="Phone number" required/> 
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange}type="password" name="password" value={userData.password} placeholder="Password" required/>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " onChange={handleChange}type="password" placeholder="Confirm Password" required/>
                <br/>
                <input className="border-neutral-400 border-2 border-[#E7DDDD] p-[5px] " type="checkbox" required/> <label>I have read and accepted the terms and conditions.</label>
                <br/>
                <input className=" form__button border-neutral-400 rounded bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit" value="Continue"/>
            </form>
            <Link to="/"><p>Already have an account?<span className="text-blue">Login</span></p></Link>
        </section>
    )
}


export default SignupForm;