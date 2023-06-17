import { AnimLogo } from "../../Animations/animLogo";
import pic1 from "../../../../../public/images/pictures/infoPic.jpg";
import pic2 from "../../../../../public/images/pictures/infoPic2.jpg";
import pic3 from "../../../../../public/images/pictures/infoPic3.jpg";
import Image from "next/image";

export function CardInfo() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2">
            {/* <section className="grid grid-cols-2 px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%]"> */}
            <div className="sm:sticky sm:top-[90px] flex items-center justify-center w-full bg-white h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] flex-col gap-6">
                <AnimLogo color="black" />
                <button className="p-2 font-bold text-black transition-colors duration-300 ease-in-out border border-black rounded-md hover:bg-black hover:text-white">
                    Create now
                </button>
            </div>
            {/* bg-position-center and bg-size cover */}
            <div className="">
                <div className="w-full h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] relative">
                    <Image
                        src={pic1}
                        alt="image"
                        className="w-full h-full bg-center bg-cover"
                    ></Image>
                    <div className="absolute w-1/2 p-4 text-white rounded-md backdrop-blur-sm bg-white/30 top-1/4 left-1/4 h-1/2">
                        Easy to use.
                    </div>
                </div>
                <div className="w-full h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] relative">
                    <Image
                        src={pic2}
                        alt="image"
                        className="w-full h-full bg-center bg-cover"
                    ></Image>
                    <div className="absolute w-1/2 p-4 text-white rounded-md backdrop-blur-sm bg-white/30 top-1/4 left-1/4 h-1/2">
                        Easy to use.
                    </div>
                </div>
                <div className="w-full h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] bg-purple-700 relative">
                    <Image
                        src={pic3}
                        alt="image"
                        className="w-full h-full bg-center bg-cover"
                    ></Image>
                    <div className="absolute w-1/2 p-4 text-white rounded-md backdrop-blur-sm bg-white/30 top-1/4 left-1/4 h-1/2">
                        Easy to use.
                    </div>
                </div>
            </div>
        </section>
    );
}
