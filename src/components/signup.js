import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () =>{
    //This for storing the data inputted
    const [userData, setUser] =useState({
        firstname: "",
        lastname: "",
        email: "" ,
        phonenumber: "",
        password: "",
        confirm: ""
    })
    const[formError, setError] = useState({
        name: "",
        email: "" ,
        phonenumber: "",
        password: "",
        confirm: "",
        form: ""
    })
    //Form validation

    const formValidation = (userData) => {
        const error = {}
        let valid = true 
        if (userData.firstname.trim() === "" || userData.lastname.trim() === ""){
            error.name = "Input your name"
            valid = false;
        }
        if (userData.email.trim() === ""){
            error.email = "Input your email"
            valid = false;
        }else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            error.email = 'Email is invalid';
            valid = false;
        }
        if (userData.phonenumber.trim() === ""){
            error.phonenumber = "Input your phone number"
            valid = false;
        }
        if (userData.password.trim() === "") {
            error.password = "Input password"
            valid = false;
        }else if (userData.password.trim() !== userData.confirm.trim()){
            error.password = "Password do not match"
            valid = false;
        }
        
        setError({...formError, ...error})
        
        return valid

    }
    const history = useNavigate()
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
                setLoading(true)
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
                    setError({...formError, form: errorData.message});
                    // Handle error, show error message, etc.
                    // clears error message after 3 seconds
                    setTimeout(() =>{
                        setError('')
                    }, 3000)
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setError({...formError, form: error.message});
                // Handle other errors, if any.
                setLoading(false)
                // clears error message after 3 seconds
                setTimeout(() =>{
                    setError('')
                }, 3000)
            
            }
        }
        else{
            console.log("Form validation failed")
            setTimeout(() =>{
                setError({...formError, name: ''})
            }, 2000)
            setTimeout(() =>{
                setError({...formError, email: ''})
            }, 2000)
            setTimeout(() =>{
                setError({...formError, phonenumber: ''})
            }, 2000)
            setTimeout(() =>{
                setError({...formError, password: ''})
            }, 2000)
        }
    };

    return(
        <section>
            <header className="bg-blue">
                <span className="text-white">{formError.form}</span>
            </header>
            <h1><span className="text-blue">Get</span> Started</h1>
            <p className="w-[100%]">Input your details to create an account</p>
            <form onSubmit={handleSubmit}>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[40%] " onChange={handleChange} type="text" name="firstname" value={userData.firstname} placeholder="First name" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[40%] " onChange={handleChange} type="text" name="lastname" value={userData.lastname} placeholder="Last name" />
                <div className={`${formError.name ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.name}</p></div>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="email" name="email" value={userData.email} placeholder="example@gmail.com" />
                <div className={`${formError.email ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.email}</p></div>
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="tel" name="phonenumber" value={userData.phonenumber} placeholder="Phone number" />
                <div className={`${formError.phonenumber ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.phonenumber}</p></div> 
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="password" name="password" value={userData.password} placeholder="Password" />
                <input className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6]  m-[10px] w-[80%] " onChange={handleChange} type="password" name="confirm" placeholder="Confirm Password"  />
                <div className={`${formError.password ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.password}</p></div>
                <br/>
                <input className="border-neutral-400 border-2 border-[#E7DDDD] p-[5px] " type="checkbox" required/> <label>I have read and accepted the terms and conditions.</label>
                <br/>
                <button className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" disabled={formLoading ? true : false} type="submit"><h1>{formLoading ? 'Loading...' : 'continue'}</h1></button>
            </form>
            <Link to="/"><p>Already have an account?<span className="text-blue">Login</span></p></Link>
        </section>
    )
}


export default SignupForm;
