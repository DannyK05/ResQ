import Advice from "../components/advice";
import ActionBtn from "../components/action";
import  HomeLayout from "../containers/homeLayout";
const Home = () => {
    return(
       <HomeLayout>
        <Advice/>
        <ActionBtn/>
       </HomeLayout>
    )
}

export default Home;