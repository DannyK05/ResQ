import HomeHeader from "../components/homeheader";
import Navbar from "../components/nav";
const HomeLayout = (props) =>{
    return(
        <main className="h-[100vh]">
            <HomeHeader/>
            <h1>Hey User</h1>
            {props.children}
            <Navbar/>
        </main>
    )
}
export default HomeLayout