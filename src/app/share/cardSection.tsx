"use client";
import { useState } from "react";
import SlideUp from "../components/Animations/animSlideUp";
import Card from "../components/CardTemplates/card";
import { QrCode } from "./qrcode";

const info = {
    templateName: "purple",
    firstName: "Mathew",
    lastName: "Luong",
    title: "Software Developer",
    company: "Microsoft",
    email: "mathewflames@gmail.com",
    phone: "5878904493",
    website: "website.com",
    linkedin: "https://www.linkedin.com/in/mathew-luong/",
    twitter: "https://www.linkedin.com/in/mathew-luong/",
    instagram: "https://www.linkedin.com/in/mathew-luong/",
    facebook: "https://www.linkedin.com/in/mathew-luong/",
};

const cardVariants = {
    flipped: {
        rotateY: 180,
        scale: 1.1,
        transition: { duration: 0.35 },
        boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    notFlipped: {
        rotateY: 0,
        opacity: 0.85,
        boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        transition: { duration: 0.35 },
    },
};

export function CardSection() {
    const [flipped, setFlipped] = useState(false);

    const [share, setShare] = useState(false);

    const setShareMode = () => {
        setShare(!share);
    };

    return (
        <section className="mt-40 sm:mt-32 md:mt-36">
            <div className="w-full mx-auto text-center">
                <SlideUp width="w-full">
                    <h1 className="mb-4 text-black header2 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                        Share your card with others now
                        <span className="text-pinkText">.</span>
                    </h1>
                </SlideUp>
                <SlideUp width="w-full">
                    <p className="text-center text-grayText max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                        Share by link or QR code and you&apos;re set.
                    </p>
                </SlideUp>
            </div>
            <div className="p-4 py-6 md:p-8 xl:p-10">
                {!share && (
                    <Card
                        props={info}
                        styles="max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] mx-auto"
                    />
                )}
                {share && <QrCode />}
                <div className="grid grid-flow-row grid-cols-2 pt-4 place-content-center max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] mx-auto">
                    <button
                        className="inline-flex items-center gap-2 px-4 py-2 mx-auto font-bold text-white bg-black rounded-md hover:drop-shadow-lg "
                        onClick={setShareMode}
                    >
                        QR Code
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 mx-auto font-bold text-white bg-black rounded-md hover:drop-shadow-lg ">
                        Copy Link
                    </button>
                </div>
            </div>
        </section>
    );
}
