import FormHeader from "../components/formheader"

const SignLayout = (props) =>{
    return(
        <main className="h-[100vh] px-[5px]">
            <FormHeader/>
            {props.children}
        </main>
    )
}

export default SignLayout;