import SlideUp from "../Animations/animSlideUp";

export default function Featured() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 px-10 py-8 bg-gradientBg">
            <h1 className="font-bold text-white">As featured in</h1>
            <div className="grid w-full grid-flow-row gap-12 text-white gap-y-6 grid-cols-fluid place-items-center">
                <div>
                    <img
                        src="/images/brands/youtube.svg"
                        alt="YouTube logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/spotify.svg"
                        alt="Spotify logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/google.svg"
                        alt="Google logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/coca-cola.svg"
                        alt="Coca Cola logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/netflix.svg"
                        alt="Netflix logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/visa.svg"
                        alt="Visa logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/cisco.svg"
                        alt="Cisco logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
                <div>
                    <img
                        src="/images/brands/levis.svg"
                        alt="Levis logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></img>
                </div>
            </div>
        </section>
    );
}
