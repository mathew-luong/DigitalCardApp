import Image from "next/image";
import Link from "next/link";
import phone from "../../../../public/images/pictures/heroPictureTall.svg";
import hero from "../../../../public/images/pictures/heroPicture.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import SlideUp from "../Animations/animSlideUp";
import AnimRotate from "../Animations/animRotate";

export default function Intro() {
    return (
        <section className="px-12 pt-40 pb-16 md:px-28 lg:px-36 xl:px-48 2xl:px-72 z-1 3xl:px-[25%]">
            <div className="grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
                <SlideUp>
                    {/* <AnimRotate direction={-5}> */}
                    <h1 className="lgHeader">
                        <span className="colorText">
                            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1]"> */}
                            Share with others.
                        </span>{" "}
                        Anywhere. Anytime.
                    </h1>
                    {/* </AnimRotate> */}
                    <p className="text-grayText sm:max-w-[60ch] md:max-w-[40ch] 2xl:max-w-[65ch] my-6">
                        Digital business cards are the new modern way to share
                        and network. With CVNNECT you can create a business card
                        in less than 5 minutes and share it with others by QR
                        code or link.
                    </p>
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
                <AnimRotate direction={10}>
                    <Image
                        src={hero}
                        width={500}
                        priority
                        alt="How its made image"
                        className="max-w-full h-[100%] block md:hidden lg:block"
                    ></Image>
                    <Image
                        src={phone}
                        width={500}
                        priority
                        alt="How its made image"
                        className="max-w-full max-h-[30rem] hidden md:block lg:hidden"
                    ></Image>
                </AnimRotate>
            </div>
        </section>
    );
}
