const Footer = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-5 p-5 pb-3 text-gray-600 md:px-12 md:py-8 md:flex-row md:justify-between">
                <div className="">
                    <h1 className="mb-1 text-grey-400">
                        Tagline Edspert disini
                    </h1>
                    <p className="text-sm text-gray-400 md:justify-between">Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
                </div>

                <div className="flex justify-between md:justify-around md:basis-9/12">
                <div className="">
                        <h2 className="mb-2 font-bold text-gray-700">Program</h2>
                        <ul className="text-sm md:leading-loose">
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Online Course</li>
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Mini bootcamp</li>
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Bootcamp</li>
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Mentoring</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-2 font-bold text-gray-700">Bidang ilmu</h2>
                        <ul className="text-sm md:leading-loose">
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Digital marketing</li>
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Product management</li>
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">English</li>
                            <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Programming</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-2 font-bold text-gray-700">Tentang Edspert</h2>
                        <ul className="text-sm md:leading-loose">
                        <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Bantuan</li>
                        <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Kontak kami</li>
                        <li className="transition-all cursor-pointer hover:text-blue-500 hover:underline">Media sosial</li>
                    </ul>
                    </div>
                </div>
            </div>
            <p className="mt-12 mb-3 text-xs text-center md:mt-24 md:mb-7">Edspert Copyright @2023</p>
        </div>
    );
}

export default Footer;