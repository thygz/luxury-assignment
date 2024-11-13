import logo1 from '../assets/logo1.png';

const Market = () => {
    return (
        <section className="mt-20 min-[900px]:mt-32">
            <div className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-8 sm:px-14">
                <h1 className="text-4xl lg:text-5xl font-medium">
                    We Market Your Home to The World
                </h1>
                <p className="text-2xl font-crimson mt-6 lg:mt-8">
                    Our Online Marketing Strategy
                </p>
                <p className="text-xl font-medium text-slate-600 mt-6 min-[900px]:mt-8 max-w-5xl">
                    ​​​​​​​The Bay Area remains one of the world's most
                    sought-after regions to live in, and when looking to sell,
                    it is vital that your home be marketed online to audiences
                    locally, nationally, and internationally.
                </p>
                <div className="mt-14 min-[900px]:mt-14 grid grid-cols-1 min-[900px]:grid-cols-3 gap-14 items-start">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-crimson">
                            Local Exposure
                        </h1>
                        <p className="text-xl font-crimson font-medium text-slate-600 mt-4 min-[900px]:mt-6">
                            Through our partnership with Nextdoor, the private
                            online social network now used in over 80% of U.S.
                            neighborhoods and virtually all Bay Area
                            neighborhoods, we make sure your home receives
                            targeted local exposure. When you list your home
                            with Hansen Partners it will automatically appear on
                            Nextdoor in your neighborhood.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-crimson">
                            National Exposure
                        </h1>
                        <p className="text-xl font-crimson font-medium text-slate-600 mt-4 min-[900px]:mt-6">
                            We secure strategic positioning and enhancement on
                            Realtor.com, Trulia, and Zillow, driving more
                            consumers to your home and increasing exposure. We
                            will receive every inquiry about your property
                            directly.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-crimson">
                            International Exposure
                        </h1>
                        <p className="text-xl font-crimson font-medium text-slate-600 mt-4 min-[900px]:mt-6">
                            To expose your luxury listing to millions of
                            potential homebuyers worldwide, we promote on
                            prominent international real estate portals,
                            including: Wall Street Journal, LuxuryPortfolio.com,
                            LuxuryRealEstate.com, LeadingRE.com,
                            UniqueHomes.com, China.apr.com, Caimeiju, Juwai,
                            Country Life UK.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#525252] bg-opacity-10 mt-24 min-[900px]:mt-28 w-full flex justify-center items-center">
                <img
                    src={logo1}
                    alt="logo-image"
                    className="p-10 w-[95%] sm:w-[60%] lg:w-[50%] xl:w-[38%] opacity-90"
                />
            </div>
        </section>
    );
};
export default Market;
