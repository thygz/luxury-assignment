const BuyingSelling = () => {
    const sellingDetails = [
        { number: 1, title: 'Initial consultation and planning' },
        { number: 2, title: 'Device and executive marketing plan' },
        { number: 3, title: 'Review offers & reach agreement with buyer' },
        { number: 4, title: 'Complete transaction process' },
        { number: 5, title: 'After-sale services' },
    ];

    const buyingDetails = [
        { number: 1, title: 'Initial consultation and planning' },
        { number: 2, title: 'Search for a home & get pre-approved' },
        { number: 3, title: 'Submit an offer' },
        { number: 4, title: 'Complete settlement process' },
    ];

    return (
        <section className="mt-24 px-0 min-[900px]:px-14">
            <div className="flex flex-col min-[900px]:flex-row max-w-7xl mx-auto">
                <div className="relative bg-selling bg-cover bg-center bg-no-repeat w-full h-[600px] -z-10"></div>
                <div className="bg-white min-[900px]:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] p-10 mx-auto flex flex-col justify-center">
                    <h1 className="text-5xl capitalize">The selling process</h1>
                    {sellingDetails.map((detail, index) => (
                        <div key={index} className="flex gap-1 items-end -mt-3">
                            <span className="text-8xl text-black opacity-30">
                                {detail.number}
                            </span>
                            <p className="text-xl font-semibold text-slate-600">
                                {detail.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col-reverse min-[900px]:flex-row max-w-7xl mx-auto mt-10 min-[900px]:mt-28">
                <div className="bg-white min-[900px]:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] p-10 mx-auto flex flex-col justify-center">
                    <h1 className="text-5xl capitalize">The buying process</h1>
                    {buyingDetails.map((detail, index) => (
                        <div key={index} className="flex gap-1 items-end -mt-3">
                            <span className="text-8xl text-black opacity-30">
                                {detail.number}
                            </span>
                            <p className="text-xl font-semibold text-slate-600">
                                {detail.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="relative bg-buying bg-cover bg-center bg-no-repeat w-full h-[600px] -z-10"></div>
            </div>
        </section>
    );
};
export default BuyingSelling;
