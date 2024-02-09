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
    const[formError, setError] = useState('')

    const history = useNavigate()
    const handleChange = (e) => {
        //setting assigning the data inputted to the object
        setUser({ ...userData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://resq-api-5j6r.onrender.com/api/v1/resQ/users/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Form submitted successfully:', data);
                history.push("/medical");
                // Handle success, show message, reset form, etc.
            } else {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData);
                setError(errorData.message);
                // Handle error, show error message, etc.
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError(error.message);
            // Handle other errors, if any.
        }
    };

    return(
        <section>
            <header className="bg-blue">
                <span className="text-white">{formError}</span>
            </header>
            <h1><span className="text-blue">Get</span> Started</h1>
            <p className="w-[100%]">Input your details to create an account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[40%] " onChange={handleChange} type="text" name="firstname" value={userData.firstname} placeholder="First name" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[40%] " onChange={handleChange} type="text" name="lastname" value={userData.lastname} placeholder="Last name" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="email" name="email" value={userData.email} placeholder="example@gmail.com" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="tel" name="phonenumber" value={userData.phonenumber} placeholder="Phone number" required/> 
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="password" name="password" value={userData.password} placeholder="Password" required/>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="password" placeholder="Confirm Password" required/>
                <br/>
                <input className="border-neutral-400 border-2 border-[#E7DDDD] p-[5px] " type="checkbox" required/> <label>I have read and accepted the terms and conditions.</label>
                <br/>
                <button className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit"><h1>Continue</h1></button>
            </form>
            <Link to="/"><p>Already have an account?<span className="text-blue">Login</span></p></Link>
        </section>
    )
}


export default SignupForm;
