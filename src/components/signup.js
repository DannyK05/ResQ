


const SignupForm = () =>{
    return(
        <section>
            <p>Input your details to create an account</p>
            <form>
                <input type="text" placeholder="First name" required/>
                <input type="text" placeholder="Last name" required/>
                <input type="email" placeholder="example@gmail.com" required/>
                <input type="number" placeholder="Phone number" required/> 
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Confirm Password" required/>
                <input type="checkbox" required/> <label>I have read and accepted the terms and conditions.</label>
                <input class="form__button" type="submit" value="Continue"/>
            </form>
            <p>Already have an account? Login</p>
        </section>
    )
}


export default SignupForm;