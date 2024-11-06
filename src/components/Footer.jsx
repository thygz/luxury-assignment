import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import realtor from '../assets/dark-realtor-logo.png';
import equal from '../assets/dark-equal-logo.png';
import sereno from '../assets/sereno-logo.png';

const Footer = () => {
    return (
        <section className="mt-28 min-[900px]:mt-24 max-w-[88.5rem] mx-auto px-8 sm:px-14 mb-28 lg:mb-16">
            <div className="flex flex-col md:flex-row gap-20 md:gap-0 lg:gap-10">
                <div className="flex flex-col w-full md:w-4/6 lg:w-3/6">
                    <h1 className="text-4xl">Julie Hansen Partnership</h1>
                    <p className="text-lg font-semibold font-crimson text-slate-600 mt-5 max-w-full md:max-w-md">
                        An elite group of the East Bay’s most talented and
                        visionary real estate professionals believed buyers and
                        sellers deserved more from their real estate company.
                        More service. More resources. More integrity. More
                        global reach. In a word, more of everything people
                        should expect when they buy or sell their homes.
                    </p>
                    <div className="mt-10 min-[800px]:mt-24 flex flex-col xl:flex-row gap-12 xl:gap-0 justify-between">
                        <div>
                            <h1 className="uppercase text-base font-extrabold">
                                Address
                            </h1>
                            <div className="text-xl font-medium">
                                <p className="mt-2">4733 Chabot Drive #100</p>
                                <p>Pleasanton, CA 94588</p>
                                <p className="mt-5">
                                    ​​​​​​​Julie Hansen-Orvis | CA DRE# 00934447
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="uppercase text-base font-extrabold mb-2">
                                Contact Information
                            </h1>
                            <a
                                href=""
                                className="text-xl font-medium font-crimson hover:underline"
                            >
                                (925) 553-6707
                            </a>
                            <p className="text-xl font-medium mt-2">
                                luxuryhomesinwc@icloud.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-3/6 pl-0 md:pl-8 lg:pl-20 xl:pl-28">
                    <h1 className="text-4xl">Newsletter</h1>
                    <p className="text-xl font-semibold font-crimson text-slate-600 mt-5 max-w-xs mb-10">
                        Subscribe to our Newsletter for latest news and updates.
                        Stay tuned!
                    </p>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-1 border-b-2 border-[#333333] border-opacity-60 placeholder-[#525252] placeholder:font-medium placeholder:font-crimson focus:outline-none"
                    />
                    <div className="flex justify-center items-start mt-3 gap-2">
                        <input type="checkbox" className="mt-1" />
                        <p className="font-crimson text-sm text-justify text-slate-600">
                            By providing Julie Hansen Partnership your contact
                            information, you acknowledge and agree to our{' '}
                            <span className="underline cursor-pointer">
                                Privacy Policy
                            </span>{' '}
                            and consent to receiving marketing communications,
                            including through automated calls, texts, and
                            emails, some of which may use artificial or
                            prerecorded voices. This consent isn’t necessary for
                            purchasing any products or services and you may opt
                            out at any time. To opt out from texts, you can
                            reply, ‘stop’ at any time. To opt out from emails,
                            you can click on the unsubscribe link in the emails.
                            Message and data rates may apply.
                        </p>
                    </div>
                    <button className="py-2 lg:py-3 w-36 lg:w-48 border-2 border-slate-600 text-slate-600 uppercase text-lg font-semibold font-crimson mt-4">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 lg:gap-10 mt-14">
                <div className="flex flex-col w-3/6">
                    <div className="flex items-center gap-3">
                        <FaFacebookF className="w-9 h-9 p-2.5 bg-black rounded-full text-white cursor-pointer" />
                        <FaLinkedinIn className="w-9 h-9 p-2.5 bg-black rounded-full text-white cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col w-3/6 pl-0 md:pl-20 xl:pl-28">
                    <div className="flex items-center gap-12 lg:gap-16">
                        <img
                            src={realtor}
                            alt="logo-image"
                            className="w-10 h-12"
                        />
                        <img
                            src={equal}
                            alt="logo-image"
                            className="w-10 h-12"
                        />
                        <img
                            src={sereno}
                            alt="logo-image"
                            className="w-12 h-3"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[3.5rem] flex flex-col lg:flex-row gap-2 lg:gap-10">
                <p className="text-2xl">
                    Website Designed & Developed by{' '}
                    <span className="underline underline-offset-8 decoration-1 cursor-pointer hover:no-underline hover:text-[#525252] transition duration-300 ease-out">
                        Luxury Presence
                    </span>
                </p>
                <p className="text-2xl">Copyright 2024 | Privacy Policy</p>
            </div>
        </section>
    );
};
export default Footer;
