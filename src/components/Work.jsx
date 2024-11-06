const Work = () => {
    return (
        <section className="mt-28 min-[900px]:mt-32">
            <div className="relative flex justify-center items-center bg-work bg-center bg-cover bg-no-repeat h-[570px] sm:h-[520px] min-[769px]:h-[690px]">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex flex-col justify-center items-center gap-8 max-w-2xl z-10">
                    <h1 className="capitalize text-5xl text-white font-semibold">
                        Work with us
                    </h1>
                    <div className="h-[1px] w-28 bg-white"></div>
                    <p className="text-xl font-medium text-white text-center font-crimson">
                        With decades of experience in luxurious Tri Valley real
                        estate, our team is here to ensure that your dreams are
                        a reality. Let us guide you through your home buying
                        journey, contact us today!
                    </p>
                    <button className="py-3 px-10 text-white border-2 border-white uppercase text-lg font-semibold font-crimson mt-4">
                        Contact us
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Work;
