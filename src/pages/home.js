import Advice from "../components/advice";
import ActionBtn from "../components/action";
import  HomeLayout from "../containers/homeLayout";
const Home = () => {
    return(
       <HomeLayout>
        <h1>Hey <span className="text-blue">User</span></h1>
        <Advice/>
        <ActionBtn/>
       </HomeLayout>
    )
}

export default Home;