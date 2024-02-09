import {useState} from "react";

const ModCentres = ({visibility, Close}) => {
 const[centreFormVisibility, setFormVisibility] = useState(false)
    const toggleFormVisibility = () => {
        setFormVisibility(!centreFormVisibility)
    }
    return(
        <section className={`${visibility ? 'absolute' : 'hidden'} w-[90vw] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}>           
           <h2>Manage your health centres <ion-icon onClick={Close} size = "large" name="close-circle"></ion-icon></h2>
            <p>No health centres was added</p>
             <button onClick={toggleFormVisibility} className=" relative bottom-[5px] left-[10px]]border-neutral-400 rounded-[100%]  text-white">
                    <ion-icon size="large" name="add-circle"></ion-icon>
                </button>
            <form className ={`${centreFormVisibility ? 'relative' : 'hidden'}`}>
                <h1> Add health centres </h1>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="text" placeholder="Hospital name"/>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="tel" placeholder="Contact number"/>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="email" placeholder="Contact mail"/>
                <button className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit">
                    <h1>Update</h1>
                </button>
            </form> 
        </section>
    )
}
 export default ModCentres
