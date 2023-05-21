export default function Featured() {
    return (
        <section className="bg-gradientBg py-8 px-10 gap-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-white">As featured in</h1>
            <div className="w-full grid grid-flow-row gap-12 gap-y-6 grid-cols-fluid text-white place-items-center">
                <div>
                    <img
                        src="/images/brands/youtube.svg"
                        alt="YouTube logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/spotify.svg"
                        alt="Spotify logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/google.svg"
                        alt="Google logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/coca-cola.svg"
                        alt="Coca Cola logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/netflix.svg"
                        alt="Netflix logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/visa.svg"
                        alt="Visa logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/cisco.svg"
                        alt="Cisco logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/levis.svg"
                        alt="Levis logo"
                        className="w-30 h-20 opacity-70 object-contain hover:opacity-100"
                    ></img>
                </div>
            </div>
        </section>
    );
}
