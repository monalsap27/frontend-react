// eslint-disable-next-line no-unused-vars
import { json, useNavigate } from "react-router-dom";
import ContentImg from '../../public/img/course.png'

const CardContent = ({title, desc,batch, mentor1, mentor2, profesi1, profesi2, price}) => {

    const clickContent = () => {
        const dataContent ={
            title,
            desc,
            batch,
            mentor1,
            mentor2,
            profesi1,
            profesi2,
            price,
        }
        const data = localStorage.setItem("data content", JSON.stringify(dataContent));
        window.location.href = "/detail"
    }
    

    return (
        <div className='flex flex-col w-full h-full transition-all bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl' onClick={() => clickContent}>
            <img src={ContentImg} alt="content" className='rounded-t-lg bg-cyan-950' />
            <div className='m-3 text-left'>
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

export default CardContent;