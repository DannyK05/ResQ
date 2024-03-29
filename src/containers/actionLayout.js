import {Link} from "react-router-dom"
const ActionLayout =(props) =>{
    return(
        <main className="h-[100vh]">
            <header className="flex justify-between align-center py-[5px] pl-[5px] pr-[40%]">
            <Link to="/home"><span className="active:text-black"><ion-icon size="large" name="arrow-back-outline"></ion-icon></span></Link><h1 className="text-blue">{props.name}</h1>  
            </header>
            {props.children}
        </main>

        
    )
}

export default ActionLayout;
