import CourseContent from "../elements/CourseContent";
import Footer from "../elements/Footer";
import Header from "../elements/Header";

const HomePage = () => {
    return (
        <div className="relative w-full h-full">
            <Header/>
            <CourseContent/>
            <Footer/>
        </div>
     );
}
 
export default HomePage;