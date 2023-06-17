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
                    <SlideUp shapeAnim delayTime={0.25}>
                        <div className="flex items-center gap-2">
                            <span className="colorText">
                                Designed for everyone
                            </span>
                        </div>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <h1 className="my-2 header2">How it Works</h1>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <p className="text-grayText max-w-[50ch]">
                            Create an account and start configuring your
                            business card. Share with others by simply sharing
                            the QR code or link.
                        </p>
                    </SlideUp>
                </div>
                <div className="flex">
                    <Image
                        src={info}
                        width={400}
                        priority
                        alt="How its made image"
                        className="max-w-full self-center h-[90%]"
                    ></Image>
                </div>
            </div>
            <div className="grid items-center grid-flow-row grid-cols-1 gap-8 my-24 md:grid-cols-2 justify-items-center md:my-36">
                <div className="flex">
                    <Image
                        src={card}
                        width={400}
                        priority
                        alt="How its made image"
                        className="max-w-full self-center h-[90%]"
                    ></Image>
                </div>
                <div className="order-first md:order-last">
                    <SlideUp shapeAnim delayTime={0.25}>
                        <div className="flex items-center gap-2">
                            <span className="colorText">No hidden fees</span>
                        </div>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <h1 className="my-2 header2">Free of charge</h1>{" "}
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <p className="text-grayText max-w-[50ch]">
                            Create your own digital business card free of
                            charge. No hidden fees. No one time payments.
                            Forever.
                        </p>
                    </SlideUp>
                </div>
            </div>
            <div className="grid items-center grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 justify-items-center">
                <div>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <div className="flex items-center gap-2">
                            <span className="colorText">Easy to share</span>
                        </div>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <h1 className="my-2 header2">Share now</h1>
                    </SlideUp>
                    <SlideUp shapeAnim delayTime={0.25}>
                        <p className="text-grayText max-w-[50ch]">
                            Share your digital business card at the click of a
                            button. Share with a QR code or by sharing the link
                            to others.
                        </p>
                    </SlideUp>
                </div>

                <div className="flex">
                    <Image
                        src={share}
                        width={400}
                        priority
                        alt="How its made image"
                        className="max-w-full self-center h-[90%]"
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
