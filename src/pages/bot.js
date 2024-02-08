
import { Link } from "react-router-dom";
const Bot =() =>{
    return(
        <main>
            <header className="flex justify-between align-center py-[5px] px-[5px]">
            <Link to="/home"><ion-icon name="arrow-back-outline"></ion-icon></Link><h1>Res<span className="text-blue">Q</span> Bot</h1>  
            </header>
            <form className="fixed flex align-center space-between w-[100%] bottom-0">
                <textarea className="border-[1px] rounded-l border-[#E7DDDD] p-[5px] hover:border-[#2592F6] h-[40px]  mx-[5px] w-[70%] " placeholder="Ask ResQbot">

                </textarea>
                <button className=" form__button border-neutral-400 rounded-xl bg-blue m-[5px] px-[5px] py-[5px] h-[40px] w-[20%] text-white" type="submit">Send</button>
            </form>
        </main>

        
    )
}

export default Bot;