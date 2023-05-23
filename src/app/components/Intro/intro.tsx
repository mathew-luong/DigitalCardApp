import Image from "next/image";
import Link from "next/link";
import phone from "../../../../public/images/pictures/phone.svg";
import hero from "../../../../public/images/pictures/heroPic.svg";
// import hero from "../../../../public/images/pictures/introHero.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import SlideUp from "../Animations/animSlideUp";

export default function Intro() {
    return (
        <section className="px-12 pt-40 pb-16 md:px-28 lg:px-36 xl:px-48 2xl:px-72 z-1">
            <div className="grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
                <div className="flex flex-col gap-6">
                    <SlideUp>
                        <h1 className="lgHeader">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1] md:mix-blend-difference">
                                Share with others.
                            </span>{" "}
                            <span className="md:mix-blend-difference">
                                Anywhere. Anytime.
                            </span>
                        </h1>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-grayText sm:max-w-[60ch] md:max-w-[40ch] 2xl:max-w-[65ch]">
                            Digital business cards are the new modern way to
                            share and network. With CVNNECT you can create a
                            business card in less than 5 minutes and share it
                            with others by QR code or link.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <Link
                            href="/login"
                            className="inline-flex items-center self-start gap-2 px-4 py-2 mt-4 mb-[8px] mr-[8px] font-bold text-white bg-black rounded-md hover:drop-shadow-lg group"
                        >
                            Get started
                            <IoArrowForwardOutline
                                size="24"
                                className="hidden w-4 group-hover:block"
                            />
                            <IoIosArrowForward
                                size="24"
                                className="block w-4 group-hover:hidden"
                            />
                        </Link>
                    </SlideUp>
                </div>

                <div className="containerBg">
                    <Image
                        src={hero}
                        width={500}
                        // height={250}
                        priority
                        alt="How its made image"
                        className="max-w-full h-[100%] block md:hidden lg:block"
                    ></Image>
                    <Image
                        src={phone}
                        width={500}
                        // height={250}
                        priority
                        alt="How its made image"
                        className="max-w-full max-h-[30rem] hidden md:block lg:hidden"
                    ></Image>
                </div>
                {/* <div className="max-w-full h-[25rem] w-[80%] backdrop-blur-md bg-white/30 rounded-md flex justify-center items-center">
                    <Image
                        src={img}
                        width={500}
                        // height={250}
                        priority
                        alt="How its made image"
                        className="max-w-full h-[85%] w-[90%] rounded-full"
                    ></Image>
                </div> */}
            </div>
        </section>
    );
}
