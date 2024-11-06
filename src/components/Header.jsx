import logo from '../assets/jhsereno-light1.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navNames = [
        'Meet the team',
        'Search for homes',
        'Our communities',
        'Home valuation',
        'Services',
        'Homes Across America',
        'Testimonials',
        'Contact us',
    ];

    return (
        <header className="max-w-[1440px] mx-auto px-6 mt-0 min-[770px]:mt-6">
            <div className="flex justify-between items-center h-[100px] text-[#ffffff]">
                <img
                    src={logo}
                    alt="jhserono-logo"
                    className="w-52 min-[1030px]:w-[7.5rem] cursor-pointer"
                />
                <ul className="hidden min-[1350px]:flex justify-center items-center gap-6 uppercase text-[0.8rem] font-semibold tracking-wider cursor-pointer font-jost">
                    {navNames.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <RxHamburgerMenu
                    className="text-[2rem] cursor-pointer"
                    onClick={() => setToggleMenu(true)}
                />
            </div>
            <div
                className={`fixed flex justify-center items-center top-0 w-[270px] min-[765px]:w-[400px] h-screen bg-[#fff] transition-all duration-300 ease-in-out z-[100] ${
                    toggleMenu
                        ? 'right-0'
                        : '-right-[270px] min-[765px]:-right-[400px]'
                }`}
            >
                <ul className="w-full text-black text-[1.35rem] min-[765px]:text-[1.5rem] font-medium mb-16 cursor-pointer">
                    <li className="py-[0.7rem] border-b border-black text-center border-opacity-5">
                        Home
                    </li>
                    <li className="py-[0.7rem] border-b border-black text-center border-opacity-5">
                        Contact Us
                    </li>
                    {navNames.map((name, index) => (
                        <li
                            key={index}
                            className="block min-[1350px]:hidden py-[0.7rem] border-b border-black text-center border-opacity-5"
                        >
                            {name}
                        </li>
                    ))}
                </ul>
                <IoMdClose
                    className="absolute top-[1rem] min-[765px]:top-[2.1rem] right-[1rem] min-[765px]:right-[2.1rem] text-[1.9rem] cursor-pointer"
                    onClick={() => setToggleMenu(false)}
                />
            </div>
            <div
                onClick={() => setToggleMenu(false)}
                className={`fixed bg-transparent z-50 top-0 left-0 right-0 bottom-0 ${
                    toggleMenu
                        ? 'opacity-1 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            ></div>
            <div className="hidden">
                {toggleMenu
                    ? (document.body.style.overflow = 'hidden')
                    : (document.body.style.overflow = 'visible')}
            </div>
        </header>
    );
};
export default Header;
