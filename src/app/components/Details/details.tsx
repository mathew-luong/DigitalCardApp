export default function Details() {
    return (
        <section className="bg-lightBg p-8 md:p-16">
            <h1 className="font-bold text-black header2 mb-4">
                Simple but elegant.
            </h1>
            <p className="text-grayText">
                eBizz makes building a digital business card easier than ever.
                Yet sharing it is only 1 click away.
            </p>
            <div className="grid grid-rows-5 sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                <div className="bg-white rounded-3xl col-span-2 h-60 p-4 sm:p-8">
                    <h2 className="subHeader font-bold">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
                </div>
                <div className="bg-blueBg rounded-3xl row-span-2 sm:col-span-1 col-span-2 p-4 sm:p-8">
                    <h2 className="subHeader font-bold">Easy to share</h2>
                    <p>Share anytime with others, through a QR code or link.</p>
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
