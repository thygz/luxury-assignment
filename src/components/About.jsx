import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const About = () => {
    return (
        <section className="mt-28 min-[900px]:mt-32 px-8 sm:px-14">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-7 lg:gap-20">
                <img src={image1} alt="image" className="lg:w-[50%]" />
                <div className="lg:w-[50%] flex flex-col justify-center">
                    <h1 className="text-4xl font-medium">
                        Over 33 Years of Real Estate Success
                    </h1>
                    <p className="text-xl font-crimson font-medium text-slate-600 mt-6 lg:mt-8">
                        We provide every one of our clients with a level of
                        service they won’t find anywhere else. We give them what
                        they need, often before they know they need it.
                        ​​​​​​​In real estate, almost everything can be
                        negotiated. When you choose Hansen Partners It is
                        experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And
                        it’s an experience like no other.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-7 lg:gap-20 mt-24">
                <div className="lg:w-[50%] flex flex-col justify-center">
                    <h1 className="text-4xl font-medium">
                        We Want To Create An Unforgettable Experience For You...
                    </h1>
                    <p className="text-xl font-crimson font-medium text-slate-600 mt-6 lg:mt-8">
                        We combine data gained from your home’s Comparative
                        Market Analysis with local market research to create a
                        marketing plan designed to help you meet your selling
                        goals. Your home’s carefully designed plan will include
                        a range of online, print, and other marketing tools
                        targeted to the best-qualified pool of buyers. ​​​​​​​
                        Successfully marketing a home in today’s real estate
                        environment requires a firm with experience and
                        flexibility. Hansen Partners provides both.
                    </p>
                </div>
                <img src={image2} alt="image" className="lg:w-[50%]" />
            </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-7 lg:gap-20 mt-24">
                <img src={image3} alt="image" className="lg:w-[50%] my-auto" />
                <div className="lg:w-[50%] flex flex-col justify-center">
                    <h1 className="text-4xl font-medium">
                        The Hansen Partners Communications Tablet
                    </h1>
                    <div className="text-xl font-crimson font-medium text-slate-600 mt-6">
                        <p>
                            We have created this as a wonderful tool so that we
                            can communicate with you daily, provide you with
                            updates on what is happening with your home. We are
                            available at the with a click of your tablet.
                        </p>
                        <p className="mt-5">Benefits:</p>
                        <ul className="mt-2">
                            <li>
                                <span className="font-crimson">-</span> Review
                                all documents and sign in the comfort of your
                                home or anywhere.
                            </li>
                            <li>
                                <span className="font-crimson">-</span> Stay up
                                to date on all marketing activities, review
                                materials, photos, etc. in real time.
                            </li>
                            <li>
                                <span className="font-crimson">-</span> Meet
                                with us face to face on our Gotomeeting.com
                                platform to go over and discuss the events of
                                the week.
                            </li>
                            <li>
                                <span className="font-crimson">-</span> You have
                                your own email assigned just for you and your
                                common space to quickly write a note, or quickly
                                send a video message to us for fast
                                communication using our Bomb bomb video
                                messaging system.
                            </li>
                        </ul>
                        <p className="mt-5 italic">
                            We believe that transparency and guiding you and
                            your family through the process is key to having the
                            best experience. During these uncertain times. It is
                            a good feeling to know you have some one with a
                            proven track record you can count on. We will be
                            here to handle your needs during the Real Estate
                            process. We think of it before a need even arises.
                            Because, that is just what we do. Who you work with
                            does matter!{' '}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
