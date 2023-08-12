/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/img/edspertId.png";
import Menu from "../../public/img/hamburger.svg";

const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false);

    const buttonNavbarActive = () => {
        setNavbarActive(true);
    }

    const buttonCloseNavbar = () => {
        setNavbarActive(false)
    }

    const navigate = useNavigate();

    return ( 
        <div className="z-20 flex w-full h-full">
            <div className="fixed flex items-center justify-between w-full px-4 top-4 md:px-16 md:bg-cyan-950 md:top-0 md:py-3">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-8 cursor-pointer" onClick={() => navigate('/')}/>
                    <h1 className="ml-2 cursor-pointer" onClick={() => navigate('/')}>Edspert.Id</h1>
                </div>
                <img src={Menu} alt="menu" className="p-1 bg-white rounded-sm md:hidden hover:bg-gray-400 w-7" onClick={buttonNavbarActive}/>
                <div className="items-center hidden gap-16 md:flex">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <ul className="flex items-center w-full gap-12 cursor-pointer">

           

{/* <!-- Dropdown menu --> */}



<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>




                        <li className="flex items-center transition-all hover:text-gray-300">Programs <span className="mt-1 material-symbols-outlined">expand_more</span></li>
                        
                        <li className="flex items-center transition-all hover:text-gray-300">Bidang ilmu <span className="mt-1 material-symbols-outlined">expand_more</span></li>
                        <li className="transition-all hover:text-gray-300">Tentang edspert</li>
                    </ul>
                    <button className="w-32 px-4 py-2 mx-auto text-white transition-all bg-orange-500 rounded-full hover:bg-orange-600">Masuk/Daftar</button>
                </div>
            </div>
            {navbarActive && 
            <div className="">
                <div className="fixed z-40 right-3 top-3" onClick={buttonCloseNavbar}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span className="text-white material-symbols-outlined">close</span>
                </div>
                <div className="fixed top-0 left-0 z-30 flex flex-col w-screen gap-5 pt-12 text-center text-white bg-black pb-7">
                    <ul className="flex flex-col gap-5">
                        <li className="transition-all hover:text-gray-300" onClick={() => navigate('/')}>Program</li>
                        <li className="transition-all hover:text-gray-300">Bidang ilmu</li>
                        <li className="transition-all hover:text-gray-300">Tentang edspert</li>
                    </ul>
                    <button className="w-2/4 px-4 py-2 mx-auto text-white bg-orange-500 rounded-full hover:bg-orange-600">Masuk/Daftar</button>
                </div>
            </div>}
            
        </div>
     );
}
 
export default Navbar;