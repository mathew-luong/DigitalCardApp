import Image from "next/image";
import info from "../../../../../public/images/pictures/information.svg";
import card from "../../../../../public/images/pictures/creditcard.svg";
import share from "../../../../../public/images/pictures/share.svg";

import ReviewCarousel from "./reviewCarousel";
import SlideUp from "../../Animations/animSlideUp";

export default function Reviews() {
    return (
        <section className="flex flex-col py-16 px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%]">
            <div className="grid items-center grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 justify-items-center">
                <div>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-pinkText bg-pinkText px-3 py-[4px] bg-opacity-30 rounded-xl font-semibold">
                                CUSTOMIZABLE
                            </span>
                        </div>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <h1 className="my-2 header2">How it Works</h1>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <p className="text-grayText max-w-[50ch]">
                            Create an account and start configuring your
                            business card. Share with others by simply sharing
                            the QR code, email or link.
                        </p>
                    </SlideUp>
                </div>
                <div className="flex">
                    <Image
                        src={info}
                        width={450}
                        placeholder="blur"
                        alt="How its made image"
                        className="max-w-full self-center h-[100%]"
                    ></Image>
                </div>
            </div>
            <div className="grid items-center grid-flow-row grid-cols-1 gap-8 my-16 md:grid-cols-2 justify-items-center md:my-20">
                <div className="flex">
                    <Image
                        src={card}
                        width={450}
                        placeholder="blur"
                        alt="How its made image"
                        className="max-w-full self-center h-[100%]"
                    ></Image>
                </div>
                <div className="order-first md:order-last">
                    <SlideUp shapeAnim delayTime={0.1}>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-pinkText bg-pinkText px-3 py-[4px] bg-opacity-30 rounded-xl font-semibold">
                                LOW COST
                            </span>
                        </div>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <h1 className="my-2 header2">Cheap and easy</h1>{" "}
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <p className="text-grayText max-w-[50ch]">
                            Get started with your own digital business card free
                            of charge with no hidden fees.
                        </p>
                    </SlideUp>
                </div>
            </div>
            <div className="grid items-center grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 justify-items-center">
                <div>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-pinkText bg-pinkText px-3 py-[4px] bg-opacity-30 rounded-xl font-semibold">
                                ACCESSIBLE
                            </span>
                        </div>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <h1 className="my-2 header2">Share now</h1>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.1}>
                        <p className="text-grayText max-w-[50ch]">
                            Share your digital business card at the click of a
                            button. Share with a QR code, email, or via link to
                            others.
                        </p>
                    </SlideUp>
                </div>

                <div className="flex">
                    <Image
                        src={share}
                        width={450}
                        placeholder="blur"
                        alt="How its made image"
                        className="max-w-full self-center h-[100%]"
                    ></Image>
                </div>
            </div>
            <hr className="my-16 md:mt-24 text-gray"></hr>
            <div className="w-full">
                <ReviewCarousel />
            </div>
        </section>
    );
}
