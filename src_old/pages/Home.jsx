import Content from "../theme/Content";
import Footer from "../theme/Footer";
import Header from "../theme/Header";

const Home = () => {
    return (
        <div className="relative w-full h-full">
            <Header/>
            <Content/>
            <Footer/>
            {/* <Contenct/>
            <Footer/> */}
          
        </div>
    );
}

export default Home;