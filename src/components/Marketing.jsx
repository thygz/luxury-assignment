import marketingImage from '../assets/marketing-image.png';
import responsiveImage from '../assets/responsive.png';
import syndicationImage from '../assets/syndication.png';
import virtualImage from '../assets/virtual.png';
import photographyImage from '../assets/photography.png';
import logoDark from '../assets/jhsereno-dark1.png';

const Marketing = () => {
    const marketingServices = [
        {
            image: `${responsiveImage}`,
            title: 'Responsive',
            description:
                'I am always available via phone, text, or email to answer your questions in a timely manner.',
        },
        {
            image: `${syndicationImage}`,
            title: 'Syndication',
            description:
                'I market your property locally, nationally, and internationally.',
        },
        {
            image: `${virtualImage}`,
            title: 'Virtual Tours',
            description: `Let's make your home stand out with a high quality virtual tour.`,
        },
        {
            image: `${photographyImage}`,
            title: 'Photography',
            description:
                'Beautiful, high-end photography is a central part of our marketing plan for your property.',
        },
    ];

    return (
        <section className="pt-12 lg:pt-14 px-8 sm:px-14">
            <div className="max-w-7xl mx-auto">
                <div className="relative max-w-5xl mx-auto flex flex-col-reverse lg:flex-row gap-24 sm:gap-36 lg:gap-0 justify-center lg:justify-end items-center -z-10">
                    <img
                        src={marketingImage}
                        alt="marketing-image"
                        className="w-full lg:w-[75%]"
                    />
                    <div className="relative lg:absolute my-auto lg:left-0">
                        <h1 className="text-black text-5xl sm:text-7xl lg:text-6xl xl:text-7xl font-semibold">
                            Comprehensive
                        </h1>
                        <h1 className="text-black text-5xl sm:text-7xl lg:text-6xl xl:text-7xl font-semibold mt-2">
                            Marketing
                        </h1>
                        <h1 className="text-black text-5xl sm:text-7xl lg:text-6xl xl:text-7xl font-semibold mt-2">
                            Plan
                        </h1>
                        <img
                            src={logoDark}
                            alt="logo-dark"
                            className="absolute w-48 sm:w-auto lg:w-52 xl:w-64 -bottom-12 sm:-bottom-20 left-24 sm:left-36 lg:left-4 xl:-left-1 opacity-5"
                        />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-10 xl:gap-5 mt-14">
                        {marketingServices.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center p-5"
                            >
                                <img
                                    src={item.image}
                                    alt="service-image"
                                    className="w-32"
                                />
                                <h1 className="text-3xl font-crimson">
                                    {item.title}
                                </h1>
                                <p className="text-xl sm:text-lg text-center mt-3 font-crimson font-medium text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Marketing;
