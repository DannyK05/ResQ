import { Link } from 'react-router-dom';

const HomeHeader = () =>{
    return(
        <header className="flex justify-between align-center border-b border-inherit w-full p-2 bg-white  mb-4">
           <Link to="/home"> <h1 className='text-xl'>Res<span className="text-blue">Q</span></h1></Link>
            <Link to="/notification"><ion-icon name="notifications-outline"></ion-icon></Link>
        </header>
    )
}

export default HomeHeader;