import Image from "next/image";
import phone from "../../../../../public/images/pictures/heroPictureTall.svg";
import hero from "../../../../../public/images/pictures/heroPicture.svg";
import SlideUp from "../../Animations/animSlideUp";
import { GetStartedBtn } from "../../Buttons/getStartedBtn";

export default function Intro() {
    return (
        <section className="px-12 pt-44 pb-16 md:px-28 lg:px-36 xl:px-48 2xl:px-72 z-1 3xl:px-[25%]">
            <div className="grid grid-flow-row grid-cols-1 gap-12 lg:gap-2 md:grid-cols-2 place-items-center">
                <div>
                    <SlideUp delayTime={0}>
                        <h1 className="lgHeader xl:text-[3.25rem]">
                            <span className="colorText">
                                Share with others.
                            </span>{" "}
                            Anywhere. Anytime.
                        </h1>
                    </SlideUp>
                    <SlideUp delayTime={0.4}>
                        <p className="text-grayText sm:max-w-[60ch] md:max-w-[40ch] 2xl:max-w-[65ch] my-6">
                            Digital business cards are the new modern way to
                            share and network. With CVNNECT you can create a
                            business card in less than 5 minutes and share it
                            with others by QR code or link.
                        </p>
                    </SlideUp>
                    <SlideUp delayTime={0.8}>
                        <GetStartedBtn />
                    </SlideUp>
                </div>
                <SlideUp delayTime={0} translateYStart={0}>
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
                </SlideUp>
            </div>
        </section>
    );
}
