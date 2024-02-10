import Advice from "../components/advice";
import ActionBtn from "../components/action";
import  HomeLayout from "../containers/homeLayout";
import Carousel from "../components/carousel";
const Home = () => {
    
    return(
       <HomeLayout>
        <h1>Hey <span className="text-blue">User</span></h1>
        <Advice/>
        <ActionBtn/>
        <Carousel/>
       </HomeLayout>
    )
}

export default Home;