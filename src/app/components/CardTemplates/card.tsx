"use client";

import { HiOutlinePhone, HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
    purple,
    orange,
    black,
    whiteBlack,
    white,
    standard,
    gray,
    column,
} from "./templates";

interface Info {
    templateName: string;
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

interface TemplateType {
    nameStyle: string; // styling for the name
    socialsOrder: string; // order 1 if social links go on left, 2 if on right
    socialsStyle: string;
    nameContainerStyles: string;
    nameContainerOrder: string;
    cardBg: string;
    iconColor: string;
    titleStyles: string;
    infoContainerOrder: string;
}

export default function Card({ props, styles }: Props) {
    const [info, setInfo] = useState(props);
    const [template, setTemplate] = useState<TemplateType | null>(standard);

    const initTemplate = (templateName: string) => {
        if (templateName === "black") {
            setTemplate(black);
        } else if (templateName === "purple") {
            setTemplate(purple);
        } else if (templateName === "orange") {
            setTemplate(orange);
        } else if (templateName === "whiteBlack") {
            setTemplate(whiteBlack);
        } else if (templateName === "white") {
            setTemplate(white);
        } else if (templateName === "gray") {
            setTemplate(gray);
        } else if (templateName === "column") {
            setTemplate(column);
        } else if (templateName === "standard") {
            setTemplate(standard);
        }
    };

    useEffect(() => {
        setInfo(props);
        initTemplate(props.templateName);
        console.log("THESE ARE THE PROPS:", props);
    }, [props]);

    return (
        // <AnimShape classes="p-4 bg-[#000000] rounded-xl md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] min-h-[15rem] sm:min-h-[17rem] sm:aspect-[16/10]">
        <div className={"sm:mx-auto text-white z-index-10" + styles}>
            {info.firstName.length !== 0 && (
                <div
                    className={
                        "flex gap-4 rounded-xl p-4 2xl:p-8 " + template?.cardBg
                    }
                >
                    {/* Container for info */}
                    <div
                        className={
                            "flex flex-col w-full gap-4 " +
                            template?.infoContainerOrder
                        }
                    >
                        {/* Container for Name and title/company */}
                        <div
                            className={
                                "flex flex-col gap-2 " +
                                template?.nameContainerStyles +
                                " " +
                                template?.nameContainerOrder
                            }
                        >
                            <h1
                                className={
                                    " text-2xl 2xl:text-4xl 3xl:text-5xl font-bold " +
                                    template?.nameStyle
                                }
                            >
                                {info.firstName} {info.lastName}
                            </h1>
                            <h2
                                className={
                                    "text-lg font-semibold lg:text-xl 2xl:text-2xl 3xl:text-3xl " +
                                    template?.titleStyles
                                }
                            >
                                {info.title}{" "}
                                {info.company.length !== 0 &&
                                    " - " + info.company}
                            </h2>
                        </div>
                        {/* Container for Phone, Email, Website */}
                        <div className="flex flex-col gap-4 2xl:text-2xl">
                            <a
                                href={`tel:${info.phone}`}
                                className="inline-flex items-center gap-2 group"
                            >
                                <HiOutlinePhone
                                    className={template?.iconColor}
                                />
                                {info.phone
                                    .replace(/\D+/g, "")
                                    .replace(
                                        /(\d{3})(\d{3})(\d{4})/,
                                        "($1) $2-$3"
                                    )}
                            </a>
                            <a
                                href={`mailto:${info.email}`}
                                className="inline-flex items-center gap-2"
                            >
                                <HiOutlineMail
                                    className={template?.iconColor}
                                />
                                {info.email}
                            </a>
                            {info.website.length !== 0 && (
                                <a
                                    href={info.website}
                                    className={"inline-flex items-center gap-2"}
                                >
                                    <HiOutlineLink
                                        className={template?.iconColor}
                                    />
                                    My website
                                </a>
                            )}
                        </div>
                    </div>
                    {/* Container for Socials */}
                    <div
                        className={
                            "flex gap-4 p-4 rounded-lg " +
                            template?.socialsOrder +
                            " " +
                            template?.socialsStyle +
                            (info.linkedin !== "" &&
                            info.facebook !== "" &&
                            info.twitter !== "" &&
                            info.instagram !== ""
                                ? " justify-between "
                                : " gap-6 ")
                        }
                    >
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
