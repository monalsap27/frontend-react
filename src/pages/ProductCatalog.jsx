import CourseContent from "../elements/CourseContent";
import Footer from "../elements/Footer";
import Header from "../elements/Header";

const ProductCatalog = () => {
    return ( 
        <div className="relative w-full h-full bg-slate-200">
            <Header/>
            <CourseContent/>
            <div className="mt-5 bg-white">
                <Footer/>
            </div>
        </div>
     );
}
 
export default ProductCatalog;