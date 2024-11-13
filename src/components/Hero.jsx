import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = ({ scrollBackwards, scrollAppointment, setScrollAppointment }) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 541) {
                setScrollAppointment(true);
            } else {
                setScrollAppointment(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="">
            <div className="relative flex justify-center items-center bg-hero bg-center bg-cover bg-no-repeat h-[600px] -z-10 mt-[-100px] min-[770px]:mt-[-124px]">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <h1 className="text-[3.3rem] sm:text-[4rem] lg:text-[5.3rem] font-medium text-white z-10 mb-7">
                    Services
                </h1>
            </div>
            <div className="bg-[#525252] h-[59px] font-semibold flex justify-between items-center px-5 min-[770px]:px-10 z-20 mt-[-59px]">
                <div className="flex justify-center items-center gap-4 ml-7 md:ml-16 lg:ml-20 xl:ml-32 mt-[2px]">
                    <FaSearch className="text-base text-white text-opacity-90" />
                    <input
                        type="text"
                        placeholder="Search by Address or Area"
                        className="w-60 lg:w-96 bg-inherit focus:outline-none font-crimson text-white text-opacity-70 placeholder-white placeholder-opacity-50 text-[1.05rem]"
                    />
                </div>
                <div className="flex justify-center items-center gap-5 text-white text-opacity-60 mt-[2px] cursor-pointer">
                    <p className="uppercase font-crimson font-bold text-[0.9rem] hidden min-[770px]:block">
                        Book an appointment
                    </p>
                    <FaArrowRight className="text-base" />
                </div>
            </div>
            <div
                className={`bg-[#525252] h-[59px] font-semibold flex justify-between items-center px-5 min-[770px]:px-10 z-20 transition-all duration-300 ease-linear fixed right-0 left-0 ${
                    scrollAppointment ? `top-0` : 'top-[-59px]'
                } ${scrollBackwards && 'top-[100px]'}`}
            >
                <div className="flex justify-center items-center gap-4 ml-7 md:ml-16 lg:ml-20 xl:ml-32 mt-[2px]">
                    <FaSearch className="text-base text-white text-opacity-90" />
                    <input
                        type="text"
                        placeholder="Search by Address or Area"
                        className="w-60 lg:w-96 bg-inherit focus:outline-none font-crimson text-white text-opacity-70 placeholder-white placeholder-opacity-50 text-[1.05rem]"
                    />
                </div>
                <div className="flex justify-center items-center gap-5 text-white text-opacity-60 mt-[2px] cursor-pointer">
                    <p className="uppercase font-crimson font-bold text-[0.9rem] hidden min-[770px]:block">
                        Book an appointment
                    </p>
                    <FaArrowRight className="text-base" />
                </div>
            </div>
        </section>
    );
};
export default Hero;
