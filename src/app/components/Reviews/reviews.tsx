import Image from "next/image";
import info from "../../../../public/images/pictures/information.svg";
import card from "../../../../public/images/pictures/creditcard.svg";
import share from "../../../../public/images/pictures/share.svg";
import { BsFillGearFill, BsShareFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

import ReviewCarousel from "../reviewCarousel";

export default function Reviews() {
    return (
        <section className="flex flex-col px-12 md:px-36 lg:px-48 py-16 xl:px-48 2xl:px-72">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 justify-items-center items-center">
                <div className="">
                    <div className="flex items-center gap-2">
                        <span className="rounded-md p-2 bg-pinkText">
                            <BsFillGearFill size="16" className="text-white" />
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1] font-bold text-lg">
                            Designed for everyone
                        </span>
                    </div>
                    <h1 className="lgHeader my-4">How it Works</h1>
                    <p className="text-grayText max-w-[50ch]">
                        Create an account and start configuring your business
                        card. Share with others by simply sharing the QR code or
                        link.
                    </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 justify-items-center items-center my-16">
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
                    <div className="flex items-center gap-2">
                        <span className="rounded-md p-2 bg-pinkText">
                            <MdAttachMoney size="16" className="text-white" />
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1] font-bold text-lg">
                            No hidden fees
                        </span>
                    </div>

                    <h1 className="lgHeader my-4">Free of charge</h1>
                    <p className="text-grayText max-w-[50ch]">
                        Create your own digital business card free of charge. No
                        hidden fees. No one time payments. Forever.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 justify-items-center items-center">
                <div className="">
                    <div className="flex items-center gap-2">
                        <span className="rounded-md p-2 bg-pinkText">
                            <BsShareFill size="16" className="text-white" />
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1] font-bold text-lg">
                            Easy to share
                        </span>
                    </div>
                    <h1 className="lgHeader my-4">Share now</h1>
                    <p className="text-grayText max-w-[50ch]">
                        Share your digital business card at the click of a
                        button. Share with a QR code or by sharing the link to
                        others.
                    </p>
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
            <hr className="text-gray my-12"></hr>
            <div className="w-full">
                <ReviewCarousel />
            </div>
        </section>
    );
}
