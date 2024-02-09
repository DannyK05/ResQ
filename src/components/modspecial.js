import {useState} from "react";

const ModSpecial = ({visibility, Close}) => {
    const[specialFormVisibility, setFormVisibility] = useState(false)
    const toggleFormVisibility = () =>{
        setFormVisibility(!specialFormVisibility)
    }
    return(
        <section className={`${visibility ? 'absolute' : 'hidden'} w-[90vw] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}>           
           <h1>Manage your special personnel info <ion-icon onClick={Close} size = "large" name="close-circle"></ion-icon></h1>
            <p>No special person was added</p>
             <button onClick={toggleFormVisibilty} className=" fixed bottom-[10px] right-[10px]]border-neutral-400 rounded-[100%]  text-white">
                    <ion-icon size="large" name="add-circle"></ion-icon>
                </button>
            <form className ={`${specialFormVisibility ? hidden : block}`}>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="text" placeholder="Person's name"/>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="number" placeholder="Person's number"/>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="email" placeholder="Person's mail"/>
                <button className=" form__button border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit">
                    <h1>Update</h1>
                </button>
            </form> 
        </section>

    )
}
export default ModSpecial;
