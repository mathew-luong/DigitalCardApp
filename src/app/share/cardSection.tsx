"use client";
import { useState } from "react";
import AnimExpand from "../components/Animations/animExpand";
import SlideUp from "../components/Animations/animSlideUp";
import { ShareSection } from "./shareSection";

const info = {
    templateName: "standard",
    firstName: "Mathew",
    lastName: "L",
    title: "CEO",
    company: "MovieFinder",
    email: "mathewl@gmail.com",
    phone: "1234567890",
    website: "qwer",
    linkedin: "https://www.linkedin.com/in/mathew-luong/",
    twitter: "qwer",
    instagram: "qwer",
    facebook: "qwer",
};

export function CardSection() {
    return (
        <section className="pt-40 pb-12 sm:pt-28">
            {/* <div className="w-full mx-auto text-center">
                <SlideUp width="w-full" delayTime={0}>
                    <h1 className="mb-4 text-black header2 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                        Share your card with others now
                        <span className="text-pinkText">.</span>
                    </h1>
                </SlideUp>
                <SlideUp width="w-full" delayTime={0}>
                    <p className="text-center text-grayText max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                        Share by link or QR code and you&apos;re set.
                    </p>
                </SlideUp>
            </div> */}
            {/* <div className="p-4 py-6 md:p-8 xl:p-10">
                {!share && (
                    <Card
                        props={info}
                        styles="max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] mx-auto"
                    />
                )}
            </div> */}
            <AnimExpand>
                <ShareSection />
            </AnimExpand>
        </section>
    );
}
