"use client";

import { HiOutlinePhone, HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Train_One } from "next/font/google";
import { useEffect, useState } from "react";

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

interface Info {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
}

interface Props {
    props: Info;
    styles?: string;
}

export default function BusinessCard({ props, styles }: Props) {
    const [info, setInfo] = useState(props);
    // console.log("BUSINESS CARD PROPS:", props.firstName);

    useEffect(() => {
        setInfo(props);
    }, [props]);

    return (
        // <AnimShape classes="p-4 bg-[#000000] rounded-xl md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] min-h-[15rem] sm:min-h-[17rem] sm:aspect-[16/10]">
        <div className={"sm:mx-auto text-white z-index-10" + styles}>
            {info.firstName.length !== 0 && (
                <div className="py-4 xl:py-6 2xl:py-8 3xl:py-12 bg-[#000000] flex flex-col gap-4 rounded-xl">
                    <div className="flex flex-col gap-2 px-4 xl:px-6 2xl:px-8 3xl:px-8">
                        <h1
                            className={
                                font.className +
                                " colorText text-2xl 2xl:text-4xl 3xl:text-5xl"
                            }
                        >
                            {info.firstName} {info.lastName}
                        </h1>
                        <h2 className="text-lg font-bold lg:text-xl 2xl:text-2xl 3xl:text-3xl">
                            {info.title}{" "}
                            {info.company.length !== 0 && " - " + info.company}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2 px-4 py-2 xl:px-6 2xl:px-8 3xl:px-8 3xl:py-8 3xl:gap-4 2xl:text-2xl cardBg">
                        <a
                            href={`tel:${info.phone}`}
                            className="inline-flex items-center gap-2 group"
                        >
                            <HiOutlinePhone className="text-white" />
                            {info.phone
                                .replace(/\D+/g, "")
                                .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                        </a>
                        <a
                            href={`mailto:${info.email}`}
                            className="inline-flex items-center gap-2"
                        >
                            <HiOutlineMail className="text-white" />
                            {info.email}
                        </a>
                        {info.website.length !== 0 && (
                            <a
                                href={info.website}
                                className={"inline-flex items-center gap-2"}
                            >
                                <HiOutlineLink className="text-white" />
                                My website
                            </a>
                        )}
                    </div>

                    <div className="flex px-4 mb-1 bg-yelleow-400 xl:px-6 2xl:px-8 max-w-[60%] lg:max-w-[50%] justify-beetween gap-4">
                        {info.linkedin.length !== 0 && (
                            <a
                                href={info.linkedin}
                                className="inline-flex items-center hover:text-[#0e76a8] ease-in duration-200"
                            >
                                <BsLinkedin size="22" />
                            </a>
                        )}
                        {info.twitter.length !== 0 && (
                            <a
                                href={info.twitter}
                                className="inline-flex items-center hover:text-[#1DA1F2] ease-in duration-200"
                            >
                                <BsTwitter size="22" />
                            </a>
                        )}
                        {info.instagram.length !== 0 && (
                            <a
                                href={info.instagram}
                                className="inline-flex items-center hover:text-[#E1306C] ease-in duration-200"
                            >
                                <BsInstagram size="22" />
                            </a>
                        )}
                        {info.facebook.length !== 0 && (
                            <a
                                href={info.facebook}
                                className="inline-flex items-center hover:text-[#4267B2] ease-in duration-200"
                            >
                                <BsFacebook size="22" />
                            </a>
                        )}
                    </div>
                </div>
            )}
            {info.firstName.length === 0 && (
                <div className="py-4 xl:py-6 2xl:py-8 3xl:py-12 bg-[#000000] flex flex-col gap-4 rounded-xl min-h-[15rem] sm:min-h-[17rem] 3xl:min-h-[20rem] items-center justify-center">
                    <h1 className="px-4 text-2xl font-bold 2xl:text-4xl 3xl:text-5xl xl:px-6 2xl:px-8 3xl:px-8">
                        Start creating your card now!
                    </h1>
                </div>
            )}
        </div>

        // </AnimShape>
    );
}
