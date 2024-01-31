import { useState } from "react";


const LoginForm = () =>{
    
    return(
        <section>
            <p>Login to your account</p>
            <form>
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " type="email" placeholder="example@gmail.com" required/> 
                <input className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%] " type="password" placeholder="Password"  required/>
                <input className="form__button border-neutral-400 rounded bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" class="form__button" type="submit" value="LOGIN"/>
            </form>
            <p>Don't have an account? SignUp</p>
        </section>
    )
}

export default LoginForm;