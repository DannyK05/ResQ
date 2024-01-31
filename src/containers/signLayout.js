import FormHeader from "../components/homeheader"

const SignLayout = (props) =>{
    return(
        <section>
            <FormHeader/>
            {props.children}
        </section>
    )
}

export default SignLayout;