import {useEffect, useState} from "react";
import axios from "axios";
const ModSpecial = ({visibility, Close}) => {
    const[specialFormVisibility, setFormVisibility] = useState(false)
    const toggleFormVisibility = () =>{
        setFormVisibility(!specialFormVisibility)
    }
    // To store the dat of the special person
    const [specialData, setSpecial] = useState({
        specialname : '',
        specialemail: '',
        specialnumber:''
    })
    // To store input
    const handleChange = (e) =>{
        e.preventDefault()
        setSpecial({...specialData, [e.target.name]: e.target.value})
    }
    // To store the error message
    const[formError, setError] = useState({
        name: '',
        email: '',
        number: '',
        form: ''
    })

    //Form validation
    const formValidation = (specialData) => {
        const error ={}
        let valid = true
        if (specialData.specialname === ''){
            error.name = 'Please input name'
            valid = false
        }
        if (specialData.specialnumber === ''){
            error.number = 'Please input number'
            valid = false
        }
        if (specialData.specialemail === ''){
            error.email = 'Please input email'
            valid = false
        }
        setError(error)
        return valid
    }
    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formValidation(specialData)){
            try {
                const response = await axios.post('',specialData)
                console.log("Form submitted", response)
                setError({...formError, form:"Form submitted successfully"})
                

            } catch (error) {
                console.error("Error submitting form:", error);
                setError({...formError, form: error.message });
                setTimeout( () =>{
                    setError({...formError, form: ''})
                }, 2000
                )
            }
        }
        else{
            console.log("Form validation failed")
            // clears error message after 2 seconds
            setTimeout( () =>{
                setError({...formError, name: ''})
            }, 2000
            )
            setTimeout( () =>{
                setError({...formError, email: ''})
            }, 2000
            )
            setTimeout( () =>{
                setError({...formError, number: ''})
            }, 2000
            )
        }
    }
    // Fetch already present special ones
    let available = false
    const[availablePerson, setPerson]= useState({
        name: '',
        number:'',
        email: ''
    })
    useEffect(()=>{
        async function fetchData () {
        try {
            const response = await axios.get('api')
            const data = await response.json;
                setPerson({...availablePerson, ...data})
                console.log("Fetch special successful", data)
                available = true
           
        } catch (error) {
            console.log(error.message)
        }
        }
        fetchData()
    }    
    ,[])

    return(
        <section className={`${visibility ? 'absolute' : 'hidden'} w-[90vw] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}> 
             <header className="bg-blue">
                <span className="text-white text-center"><p>{formError.form}</p></span>
            </header>          
           <h1>Manage your special person info <ion-icon onClick={Close} size = "large" name="close-circle"></ion-icon></h1>
           { available ? 
            <div>
                <h1>{availablePerson.name}</h1>
                <p>{availablePerson.number}</p>
            </div>
            :
                <p>No special person was added</p>
                }
             <button onClick={toggleFormVisibility} className=" relative bottom-[5px] left-[10px]]border-neutral-400 rounded-[100%]  text-white">
                    <ion-icon size="large" name={`${specialFormVisibility ? 'close-circle' : 'add-circle'}`}></ion-icon>
                </button>
            <form onSubmit={handleSubmit} className ={`${specialFormVisibility ? 'block' : 'hidden'}`}>
                <h1> Add your special personnel</h1>
                <p className="bg-blue p-[2px] text-white">You can add only two special person</p>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="text" onChange={handleChange} name="specialname" value={specialData.specialname} placeholder="Person's name"/>
                <div className={`${formError.name ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.name}</p></div>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="tel" onChange={handleChange} name="specialnumber" value={specialData.specialnumber} placeholder="Person's number"/>
                <div className={`${formError.number ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.number}</p></div>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="email" onChange={handleChange} name="specialemail" value={specialData.specialemail} placeholder="Person's mail"/>
                <div className={`${formError.email ? 'bg-blue p-[2px]' :''} text-center  text-white`}><p>{formError.email}</p></div>
                <button className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit">
                    <h1>Update</h1>
                </button>
            </form> 
        </section>

    )
}
export default ModSpecial;
