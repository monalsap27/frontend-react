import Checklist from "../../public/img/checklistCourse.png";

const CourseEdu = ({title, desc}) => {
    return ( 
        <div className="">
            <div className="flex items-center gap-2">
                <img src={Checklist} alt="Course" className="w-4 h-4"/>
                <h1 className="text-lg font-bold">{title}</h1>
            </div>
            <p className="ml-5 text-sm">{desc}</p>
        </div>
     );
}
 
export default CourseEdu;