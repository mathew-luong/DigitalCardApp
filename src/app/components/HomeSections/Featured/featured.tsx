import Image from "next/image";
import youtube from "../../../../../public/images/brands/youtube.svg";
import spotify from "../../../../../public/images/brands/spotify.svg";
import google from "../../../../../public/images/brands/google.svg";
import netflix from "../../../../../public/images/brands/netflix.svg";
import coke from "../../../../../public/images/brands/coca-cola.svg";
import cisco from "../../../../../public/images/brands/cisco.svg";
import visa from "../../../../../public/images/brands/visa.svg";
import levis from "../../../../../public/images/brands/levis.svg";
import SlideUp from "../../Animations/animSlideUp";

export default function Featured() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 px-10 py-8 bg-gradientBg xl:px-48 2xl:px-72 3xl:px-[25%]">
            <h1 className="font-bold text-white">As featured in</h1>
            <div className="grid w-full grid-flow-row gap-12 text-white gap-y-6 grid-cols-fluid place-items-center">
                <div>
                    <Image
                        src={youtube}
                        alt="YouTube logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={spotify}
                        alt="Spotify logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={google}
                        alt="Google logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={coke}
                        alt="Coca-Cola logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={netflix}
                        alt="Netflix logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={visa}
                        alt="Visa logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={cisco}
                        alt="Cisco logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={levis}
                        alt="Levis logo"
                        className="object-contain h-20 w-30 opacity-70 hover:opacity-100"
                    ></Image>
                </div>
            </div>
        </section>
    );
}
