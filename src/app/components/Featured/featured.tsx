export default function Featured() {
    return (
        <section className="bg-gradientBg py-8 px-10 gap-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-white">As featured in</h1>
            <div className="w-full grid grid-flow-row gap-12 grid-cols-fluid text-white place-items-center">
                <div>ICONS</div>
                <div>ICONS</div>
                <div>ICONS</div>
                <div>ICONS</div>
            </div>
        </section>
    );
}
