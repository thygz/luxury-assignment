const Expertise = () => {
    return (
        <section className="mt-12 lg:mt-14 px-8 sm:px-14">
            <div className="max-w-7xl mx-auto">
                <div className="mt-32">
                    <div className="relative flex flex-col min-[900px]:flex-row justify-center items-center w-full">
                        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl text-white z-10">
                            Decor Guidance
                        </h1>
                        <div className="relative bg-decor1 bg-center bg-cover bg-no-repeat w-full min-[900px]:w-3/6 h-[250px] sm:h-[350px] min-[900px]:h-[400px]"></div>
                        <div className="relative bg-decor2 bg-center bg-cover bg-no-repeat w-full min-[900px]:w-3/6 h-[250px] sm:h-[350px] min-[900px]:h-[400px]">
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8 sm:mt-10">
                        <h1 className="text-5xl">My Staging Expertise</h1>
                        <ul className="mt-8 text-xl font-crimson text-slate-600 flex flex-col gap-5">
                            <li>- Unclutter and organize your home</li>
                            <li>- Neatly arrange drawers and cabinets</li>
                            <li>- Keep pets outdoors or off the premises</li>
                            <li>- Play soft music</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 min-[900px]:mt-24">
                    <div className="relative flex flex-col min-[900px]:flex-row justify-center items-center w-full">
                        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl text-white z-10">
                            Intentional Layout
                        </h1>
                        <div className="relative bg-intentional1 bg-center bg-cover bg-no-repeat w-full min-[900px]:w-3/6 h-[250px] sm:h-[350px] min-[900px]:h-[400px]">
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                        </div>
                        <div className="relative bg-intentional2 bg-center bg-cover bg-no-repeat w-full min-[900px]:w-3/6 h-[250px] sm:h-[350px] min-[900px]:h-[400px]">
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8 sm:mt-10">
                        <h1 className="text-5xl">My Staging Expertise</h1>
                        <ul className="mt-8 text-xl font-crimson text-slate-600 flex flex-col gap-5">
                            <li>- Unclutter and organize your home</li>
                            <li>- Neatly arrange drawers and cabinets</li>
                            <li>- Keep pets outdoors or off the premises</li>
                            <li>- Play soft music</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Expertise;
