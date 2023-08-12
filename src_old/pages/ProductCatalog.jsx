// import CardContent from "../components/CardContent";
import Content from "../theme/Content";
// import CourseContent from "../theme/CourseContent";
import Footer from "../theme/Footer";
import Header from "../theme/Header";

const ProductCatalog = () => {
    return ( 
        <div className="relative w-full h-full bg-slate-200">
            <Header/>
            <Content/>
            <div className="mt-5 bg-white">
                <Footer/>
            </div>
        </div>
     );
}
 
export default ProductCatalog;