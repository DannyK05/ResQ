

const LoginForm = () =>{
    return(
        <section>
            <p>Login to your account</p>
            <form>
                <input type="email" placeholder="example@gmail.com" required/> 
                <input type="password" placeholder="Password"  required/>
                <input class="form__button" type="submit" value="LOGIN"/>
            </form>
            <p>Don't have an account? SignUp</p>
        </section>
    )
}

export default LoginForm;