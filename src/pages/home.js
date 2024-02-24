import Advice from "../components/advice";
import ActionBtn from "../components/action";
import  HomeLayout from "../containers/homeLayout";
import Carousel from "../components/carousel";
const Home = () => {
    
    return(
       <HomeLayout>
        <h1>Welcome</h1>
        <Advice/>
        <ActionBtn/>
        <Carousel/>
       </HomeLayout>
    )
}

export default Home;