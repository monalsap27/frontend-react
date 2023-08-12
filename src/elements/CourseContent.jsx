import CourseCard from "../components/CourseCard";

const CourseContent = () => {
    const dataCourse = [
        {
            title: 'Programming Laravel',
            desc: 'Getting started with laravel 9',
            batch: 'August 2023',
            mentor1: 'Dr. Amelia Fitzgerald',
            mentor2: 'Samuel Rodriguez',
            profesi1: 'Backend Developer Google',
            profesi2: 'Fullstack Developer Netflix',
            price: 279000,
        },
        {
            title: 'Fundamentals of Python',
            desc: 'Learn the basics of Python',
            batch: 'August 2023',
            mentor1: 'Profesor David Johnson',
            mentor2: 'Danielle Mitchell',
            profesi1: 'Python Developer',
            profesi2: 'Software Engineer',
            price: 499000,
        },
        {
            title: 'Web Development',
            desc: 'Master web development',
            batch: 'August 2023',
            mentor1: 'Dr. Sarah Thompson ',
            mentor2: 'Emily Wong',
            profesi1: 'Frontend Developer Google',
            profesi2: 'Backend Developer Google',
            price: 349000,
        },
        {
            title: 'Data Science and ML',
            desc: 'Dive into data science and ml',
            batch: 'September 2023',
            mentor1: 'Dr. Robert Chen',
            mentor2: 'Dr. Marcus Armstrong',
            profesi1: 'Senior Data Science',
            profesi2: 'Machine Learning Engineer',
            price: 499000,
        },
        {
            title: 'Mobile App Development',
            desc: "Build cross-platform mobile apps",
            batch: 'September 2023',
            mentor1: 'Emily Garcia',
            mentor2: 'Olivia Roberts',
            profesi1: 'Flutter Developer',
            profesi2: 'Mobile Developer',
            price: 799000,
        },
        {
            title: 'Cybersecurity and Hacking',
            desc: 'Learn about computer security and hacking',
            batch: 'October 2023',
            mentor1: 'Dr. Michael Roberts',
            mentor2: 'Nathan Sullivan',
            profesi1: 'Python Developer',
            profesi2: 'Network Engineer',
            price: 697000,
        },
        {
            title: 'Data Visualization',
            desc: ' Transform data into interactive visualizations',
            batch: 'October 2023',
            mentor1: 'Prof. Laura Hernandez',
            mentor2: 'Dr. Victoria Harrison',
            profesi1: 'Senior Data Visualization',
            profesi2: 'Data Engineer',
            price: 399000,
        },
        {
            title: 'Blockchain Technology',
            desc: 'Learn blockchain technology',
            batch: 'October 2023',
            mentor1: 'Dr. Alexander Kim',
            mentor2: 'Charles Thompson',
            profesi1: 'Solidity Developer',
            profesi2: 'Blockchain Developer',
            price: 799000,
        },
    ]

    return ( 
        <div className="grid w-full h-full grid-rows-1 gap-5 px-5 py-5 md:px-12 bg-slate-200 md:grid-cols-4">
            {dataCourse.map((data) => (
                <CourseCard 
                key={data.id}
                title={data.title} 
                desc={data.desc} 
                batch={data.batch}
                mentor1={data.mentor1}
                mentor2={data.mentor2}
                profesi1={data.profesi1}
                profesi2={data.profesi2}
                price={data.price}/>
            ))}
        </div>
     );
}
 
export default CourseContent;