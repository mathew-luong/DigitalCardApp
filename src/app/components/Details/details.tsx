export default function Details() {
    return (
        <section className="bg-lightBg p-8 md:p-16 lg:px-48 lg:py-20 2xl:px-56">
            <h1 className="font-bold text-black header2 mb-4">
                Simple but elegant
                <span className="text-pinkText ml-[2px]">.</span>
            </h1>
            <p className="text-grayText">
                eBizz makes building a digital business card easier than ever.
                Yet sharing it is only 1 click away.
            </p>
            <div className="grid grid-rows-5 sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="bg-white rounded-3xl col-span-2 h-60 p-4 sm:p-8">
                    <h2 className="subHeader font-bold">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
                <div className="bg-blueBg rounded-3xl row-span-2 sm:col-span-1 col-span-2 p-4 sm:p-8 overflow-hidden relative">
                    <h2 className="subHeader font-bold z-2">Free of charge</h2>
                    <p className="z-2">No hidden fees or payment necessary.</p>
                    <div className="bg-white rounded-2xl text-white rotate-45 z-1 w-[70%] h-56 absolute -right-12 -bottom-12"></div>
                </div>
                <div className="bg-blueBg rounded-3xl col-span-2 sm:col-span-1 p-4 sm:p-8">
                    <h2 className="subHeader font-bold">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
                <div className="bg-white rounded-3xl col-span-2 sm:col-span-1 p-4 sm:p-8">
                    <h2 className="subHeader font-bold">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
            </div>
        </section>
    );
}
