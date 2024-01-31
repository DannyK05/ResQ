import FormHeader from "../components/formheader"

const SignLayout = (props) =>{
    return(
        <section>
            <FormHeader/>
            {props.children}
        </section>
    )
}

export default SignLayout;