import { useNavigate } from "react-router-dom";
import CourseEdu from "../components/CourseEdu";
import Navbar from "../components/Navbar";
import Footer from "../elements/Footer";
import Icon from "../../public/img/headerImage.png";
import Icon1 from "../../public/img/iconHeader1.png";
import Icon2 from "../../public/img/iconHeader2.png";
import Checklist from "../../public/img/checklistCourse.png";

const ProductDetails = () => {
    const navigate = useNavigate();

    const detailCourse = localStorage.getItem("data course");
    const data = JSON.parse(detailCourse);

    return ( 
        <div className=" bg-slate-200">
            <div className="w-full h-full text-white bg-cyan-950">
                <div className="w-full h-screen bg-cyan-950"></div>
                <div className="fixed top-0 z-30 w-full h-16 text-white bg-cyan-950">
                    <Navbar/>
                </div>
                <div className="absolute z-20 w-full text-center top-24">
                    <div className="px-3 md:w-1/2 md:mt-24 md:text-left md:ml-16">
                        <h2 className="w-full mx-auto text-2xl font-bold md:text-5xl ">{data.title}</h2>
                        <p className="mt-5 md:text-4xl">{data.desc}</p>
                        <p className="mt-5 font-bold">Mentor</p>
                        <div className="justify-center gap-2 md:justify-normal md:mt-3">
                            <h3 className="font-bold">{data.mentor1}</h3>
                            <p>{data.profesi1}</p>
                        </div>
                        <div className="justify-center gap-2 mt-3 md:justify-normal">
                            <h3 className="font-bold">{data.mentor2}</h3>
                            <p>{data.profesi2}</p>
                        </div>
                    </div>
                    <div className="relative w-full mt-5 md:right-0 md:top-44 md:absolute">
                    <img src={Icon} alt="header image" className="absolute z-20 mt-2 md:-top-64 md:right-0"/>
                    <img src={Icon1} alt="icon" className="absolute z-10 w-28 top-44 left-16 md:scale-y-150 md:left-2/4 md:ml-16 md:mt-1 md:top-40"/>
                    <img src={Icon2} alt="icon" className="absolute z-10 w-28 top-12 md:-top-12 right-16 md:scale-150 md:right-52"/>
                </div>
                </div>
            </div>
            <div className="md:flex">
                <div className="flex flex-col mx-5 mt-5 text-lg bg-white rounded-lg shadow-md md:basis-1/4 md:h-full">
                    <h3 className="px-5 py-3 text-lg">Materi</h3>
                    <h3 className="px-5 py-3 text-lg">Fasilitas</h3>
                    <div className="flex justify-between pt-3 mx-5 border-t-2 price">
                        <p className="line-through text-md">{(parseInt(data.price)+200000).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</p>
                        <p className="text-lg text-red-500">{(parseInt(data.price)).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</p>
                    </div>
                    <button className="px-3 py-2 m-5 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-600 " onClick={() => navigate('/checkout')}>Daftar Kelas</button>
                </div>
                <div className="md:basis-3/4">
                    <div className="pb-3 mx-5 mt-5 bg-white rounded-lg shadow-md">
                        <div className="w-full h-full px-5 py-4 md:py-5 md:px-8 basis-full">
                            <h2 className="text-xl font-bold md:text-2xl">Materi</h2>
                            <div className="flex flex-col gap-3 mt-3 md:mt-4">
                                <CourseEdu 
                                title={`Pengenalan Programming ${data.title}`} 
                                desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."}/>
                                <CourseEdu 
                                title={`Materi Bootcamp ${data.title} 2`} 
                                desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."}/>
                                <CourseEdu 
                                title={`Materi Bootcamp ${data.title} 3`} 
                                desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."}/>
                                <CourseEdu 
                                title={`Materi Bootcamp ${data.title} 4`} 
                                desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."}/>
                                <CourseEdu 
                                title={`Materi Bootcamp ${data.title} 5`} 
                                desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."}/>
                                <CourseEdu 
                                title={`Materi Bootcamp ${data.title} 6`} 
                                desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."}/>
                            </div>
                        </div>
                        {/* <div className="w-full h-24 bg-blue-300 basis-3/4"></div> */}
                    </div>
                    <div className="p-3 mx-5 mt-5 bg-white rounded-lg shadow-md fasilitas md:px-8 md:py-5">
                        <h2 className="text-xl font-bold md:text-2xl">Materi</h2>
                        <div className="flex flex-col gap-2 mt-3 md:mt-4">
                            <div className="flex items-center gap-2">
                                <img src={Checklist} alt="Course" className="w-4 h-4"/>
                                <h1 className="text-lg font-bold">E-Sertifikat</h1>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <img src={Checklist} alt="Course" className="w-4 h-4"/>
                                <h1 className="text-lg font-bold">Portfolio</h1>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <img src={Checklist} alt="Course" className="w-4 h-4"/>
                                <h1 className="text-lg font-bold">Job Connector</h1>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <img src={Checklist} alt="Course" className="w-4 h-4"/>
                                <h1 className="text-lg font-bold">Career Development</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center gabung bg-cyan-950">
                <h2 className="pt-20 mx-auto text-xl font-bold text-white md:pt-40">Sudah siap bergabung?</h2>
                <button className="px-5 py-2 m-5 mb-20 text-lg text-gray-100 rounded-full md:mb-40 bg-amber-400 hover:bg-amber-500 " onClick={() => navigate('/checkout')}>Daftar Kelas</button>
            </div>
            <div className="mt-5 bg-white">
                <Footer/>
            </div>
        </div>
     );
}
 
export default ProductDetails;