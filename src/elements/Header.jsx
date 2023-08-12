import Navbar from "../components/Navbar";
import Icon from "../../public/img/headerImage.png";
import Icon1 from "../../public/img/iconHeader1.png";
import Icon2 from "../../public/img/iconHeader2.png";

const Header = () => {
    return ( 
        <div className="w-full h-full text-white bg-cyan-950">
            <div className="w-full h-screen bg-cyan-950"></div>
            <div className="fixed top-0 z-30 w-full h-16 bg-black md:hidden">
            </div>
            <div className="fixed top-0 z-40">
                <Navbar/>
            </div>
            <div className="absolute z-20 text-center md:text-left top-24 md:w-full">
                <div className="md:w-1/2 md:mt-24">
                    <h2 className="w-3/4 mx-auto text-2xl font-bold md:text-5xl">Jadi expert bersama edspert.id</h2>
                    <p className="px-5 mt-12 md:w-3/4 md:mx-auto md:px-0">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                </div>
                <div className="relative w-full mt-8 md:right-0 md:top-44 md:absolute">
                    <img src={Icon} alt="header image" className="absolute z-20 mt-2 md:-top-64 md:right-0"/>
                    <img src={Icon1} alt="icon" className="absolute z-10 w-28 top-44 left-16 md:scale-y-150 md:left-2/4 md:ml-16 md:mt-1 md:top-40"/>
                    <img src={Icon2} alt="icon" className="absolute z-10 w-28 top-12 md:-top-12 right-16 md:scale-150 md:right-52"/>
                </div>
            </div>
        </div>
     );
}
 
export default Header;