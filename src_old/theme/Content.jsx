import CardContent from '../components/CardContent';

const Content = () => {

    const dataContent = [
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
            title: 'Programming Laravel',
            desc: 'Getting started with laravel 9',
            batch: 'August 2023',
            mentor1: 'Dr. Amelia Fitzgerald',
            mentor2: 'Samuel Rodriguez',
            profesi1: 'Backend Developer Google',
            profesi2: 'Fullstack Developer Netflix',
            price: 279000,
        }
    ]

    return (
        <div className="grid w-full h-full grid-rows-1 gap-5 px-5 py-16 md:px-12 bg-slate-200 md:grid-cols-4">
            {dataContent.map((data) => (
                <CardContent
                key={data.id}
                title={data.title}
                desc={data.desc}
                batch={data.batch}
                mentor1={data.mentor1}
                mentor2={data.mentor2}
                profesi1={data.profesi1}
                profesi2={data.profesi2}
                price={data.price}
                ></CardContent>
            ))}
        </div>
    );
}

export default Content;