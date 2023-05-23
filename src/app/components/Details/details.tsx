export default function Details() {
    return (
        <section className="p-8 px-12 bg-lightBg md:px-28 lg:px-36 xl:px-48 2xl:px-72">
            <h1 className="mb-4 font-bold text-black header2">
                Simple but elegant
                <span className="text-pinkText ml-[2px]">.</span>
            </h1>
            <p className="text-grayText">
                eBizz makes building a digital business card easier than ever.
                Yet sharing it is only 1 click away.
            </p>
            <div className="grid grid-cols-1 grid-rows-5 gap-4 mt-10 sm:grid-rows-2 sm:grid-cols-3">
                <div className="col-span-2 p-4 bg-white rounded-3xl h-60 sm:p-8">
                    <h2 className="font-bold subHeader">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
                <div className="relative col-span-2 row-span-2 p-4 overflow-hidden bg-blueBg rounded-3xl sm:col-span-1 sm:p-8">
                    <h2 className="font-bold subHeader z-2">Free of charge</h2>
                    <p className="z-2">No hidden fees or payment necessary.</p>
                    <div className="bg-white rounded-2xl text-white rotate-45 z-1 w-[70%] h-56 absolute -right-12 -bottom-12"></div>
                </div>
                <div className="col-span-2 p-4 bg-blueBg rounded-3xl sm:col-span-1 sm:p-8">
                    <h2 className="font-bold subHeader">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
                <div className="col-span-2 p-4 bg-white rounded-3xl sm:col-span-1 sm:p-8">
                    <h2 className="font-bold subHeader">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
            </div>
        </section>
    );
}
