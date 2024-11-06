import partners from '../assets/partners.png';
import global from '../assets/global.png';
import leading from '../assets/leading.png';
import international from '../assets/international.png';
import who from '../assets/who.png';

const Luxury = () => {
    return (
        <section className="mt-28 min-[900px]:mt-32 max-w-7xl mx-auto px-8 sm:px-14">
            <div className="flex flex-col lg:flex-row gap-7 lg:gap-20">
                <img
                    src={partners}
                    alt="partners-image"
                    className="lg:w-[50%]"
                />
                <div className="lg:w-[50%] flex flex-col justify-center">
                    <p className="text-xl font-medium text-slate-600">
                        JRockcliff is a founding member of Luxury Portfolio
                        International®, the luxury division of Leading Real
                        Estate Companies of the World®. With more than 500
                        member firms around the world, Our luxury listings are
                        exposed to a vast global audience and reach potential
                        buyers and investors in over 50 countries.
                    </p>
                    <p className="text-xl font-medium text-slate-600 mt-6 lg:mt-8">
                        Who’s Who in Luxury Real Estate is a global collection
                        of luxury real estate brokers.
                    </p>
                    <div className="flex justify-between md:justify-center md:gap-20 lg:justify-between py-8 border-y mt-6 lg:mt-8 px-2 lg:mr-5 xl:mr-0">
                        <img
                            src={leading}
                            alt="leading-image"
                            className="w-[20%] md:w-[12%] lg:w-[20%]"
                        />
                        <img
                            src={international}
                            alt="internation-image"
                            className="w-[20%] md:w-[12%] lg:w-[20%]"
                        />
                        <img
                            src={who}
                            alt="who-image"
                            className="w-[20%] md:w-[12%] lg:w-[20%]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-7 lg:gap-20 mt-20 lg:mt-0">
                <div className="lg:w-[50%] flex flex-col justify-center">
                    <p className="text-xl font-medium text-slate-600">
                        Through our international affiliations, we have a strong
                        presence in over 50 countries. Our luxury listings are
                        sent to prominent international real estate sites,
                        reaching over 70 million potential buyers and investors
                        worldwide through our relationships with:
                    </p>
                    <div className="flex justify-between md:justify-center md:gap-20 lg:justify-between py-8 border-y mt-6 lg:mt-8 px-2 lg:mr-5 xl:mr-0">
                        <img
                            src={leading}
                            alt="leading-image"
                            className="w-[20%] md:w-[12%] lg:w-[20%]"
                        />
                        <img
                            src={international}
                            alt="internation-image"
                            className="w-[20%] md:w-[12%] lg:w-[20%]"
                        />
                        <img
                            src={who}
                            alt="who-image"
                            className="w-[20%] md:w-[12%] lg:w-[20%]"
                        />
                    </div>
                    <p className="text-xl font-medium text-slate-600 mt-6 lg:mt-8">
                        We also have several well-positioned affiliate offices
                        in China, providing our clients with access to buyers in
                        Hong Kong, Shanghai, and Beijing.
                    </p>
                </div>
                <img src={global} alt="partners-image" className="lg:w-[50%]" />
            </div>
        </section>
    );
};
export default Luxury;
