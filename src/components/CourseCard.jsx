import { json, useNavigate } from "react-router-dom";
import CourseImg from "../../public/img/course.png";

const CourseCard = ({title, desc, batch, mentor1, mentor2, profesi1, profesi2, price}) => {
    const clickCourse = () => {
        const dataCourse = {
            title,
            desc,
            batch,
            mentor1,
            mentor2,
            profesi1,
            profesi2,
            price
        }
        const data = localStorage.setItem("data course", JSON.stringify(dataCourse));
        window.location.href = "/detail";
    }

    return ( 
        <div className="flex flex-col w-full h-full transition-all bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => clickCourse()}>
            <img src={CourseImg} alt="course" className="rounded-t-lg bg-cyan-950"/>
            <div className="m-3 text-left">
                <h2 className="text-lg font-bold">{title}</h2>
                <h3 className="mt-1 font-bold text-md">{desc}</h3>
                <div className="flex gap-3 mt-3 text-sm">
                    <p>Batch</p>
                    <p>{batch}</p>
                </div>
                <div className="flex gap-3 mt-1 mb-5 text-sm">
                    <p>Mentor</p>
                    <p>{mentor1}</p>
                </div>
            </div>
        </div>
     );
}
 
export default CourseCard;