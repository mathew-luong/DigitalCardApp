"use client";
import { useContext, useEffect, useState } from "react";
import Card from "../components/CardTemplates/card";
import Navbar from "../components/Nav/navbar";
import Tabs from "@mui/base/Tabs";
import { TemplateTabs } from "./templateTabs";
import { AuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import {
    cardExists,
    getUserCardInfo,
    setCardInfo,
    updateCardInfo,
} from "../lib/cardFunctions";

export interface InfoType {
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

const emptyInfo = {
    templateName: "standard",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
};
export default function CreateComponent() {
    const [info, setInfo] = useState<InfoType>(emptyInfo);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // Sets the card info if a user is logged in
        if (user) {
            getUserCardInfo(user, setInfo);
        } else {
            setInfo(emptyInfo);
        }
    }, [user]);

    let disableSubmit = true;

    // Updates the state for the corresponding form input field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInfo({ ...info, [e.target.id]: value });
    };

    // Updates the template for the card
    const changeTemplate = (e: any, newValue: any) => {
        setInfo({ ...info, templateName: newValue });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            let doesCardExist = await cardExists(user.uid.toString());
            if (doesCardExist) {
                // Update card in database
                // const update = updateCardInfo(user, info);
                toast.promise(
                    updateCardInfo(user, info),
                    {
                        loading: "Updating card...",
                        success: "Card updated.",
                        error: "Failed to update card.",
                    },
                    {
                        style: {
                            minWidth: "150px",
                        },
                        success: {
                            icon: "✉️",
                        },
                    }
                );
            } else {
                // Card doesnt exist yet, create new document with info
                const create = setCardInfo(user, info);
                toast.promise(
                    create,
                    {
                        loading: "Saving card...",
                        success: "Card created.",
                        error: "Failed to save card.",
                    },
                    {
                        style: {
                            minWidth: "150px",
                        },
                        success: {
                            icon: "✉️",
                        },
                    }
                );
            }
        }
    };

    if (user) {
        disableSubmit = false;
    }

    return (
        <article>
            <Navbar />
            <div className="flex flex-col h-full pt-40 sm:pt-32 md:pt-36 md:flex-row">
                <section className="overflow-auto flex-grow mt-6 md:mt-0 flex justify-center items-center md:w-full md:mr-[47.5%] lg:mr-[33%] gap-6 md:min-h-full pb-8">
                    <div className="flex flex-col gap-6 w-[85%] md:w-[70%] lg:w-[60%] xl:w-[45%]">
                        <div>
                            <h1 className="mb-4 header2">
                                Your Details
                                <span className="text-pinkText ml-[2px]">
                                    .
                                </span>
                            </h1>
                            <p className="subHeader2 text-grayText">
                                Enter your details here to configure your
                                digital business card.
                            </p>
                        </div>
                        <form
                            className="flex flex-col gap-4 text-start"
                            onSubmit={onSubmit}
                        >
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="firstName"
                                        className="font-bold"
                                    >
                                        First name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        required
                                        value={info.firstName}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="lastName"
                                        className="mt-2 font-bold"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        required
                                        value={info.lastName}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="title"
                                        className="font-bold"
                                    >
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        required
                                        value={info.title}
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className="w-1/2 md:w-[60%] lg:w-1/2">
                                    <label
                                        htmlFor="company"
                                        className="float-left font-bold"
                                    >
                                        Company
                                    </label>
                                    <span className="float-right text-sm font-semibold text-grayText">
                                        Optional
                                    </span>
                                    <input
                                        id="company"
                                        type="text"
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        value={info.company}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="float-left font-bold"
                                >
                                    Phone number
                                </label>
                                <span className="float-right text-sm font-semibold text-grayText">
                                    1234567890
                                </span>
                                <input
                                    id="phone"
                                    type="tel"
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    required
                                    value={info.phone}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="float-left font-bold"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    required
                                    value={info.email}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div className="flex flex-col flex-wrap">
                                <label
                                    htmlFor="variants"
                                    className="float-left font-bold"
                                >
                                    Card Variants
                                </label>
                                <Tabs
                                    defaultValue="standard"
                                    id="variants"
                                    className="w-full"
                                    onChange={changeTemplate}
                                    value={info.templateName}
                                >
                                    <TemplateTabs />
                                </Tabs>
                            </div>
                            <h2 className="mt-4 font-bold subHeader">
                                Optional Details
                            </h2>
                            <div>
                                <label
                                    htmlFor="website"
                                    className="float-left font-bold"
                                >
                                    Website
                                </label>
                                <span className="float-right text-sm font-semibold text-grayText">
                                    URL
                                </span>
                                <input
                                    id="website"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    value={info.website}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div>
                                <label
                                    htmlFor="linkedin"
                                    className="float-left font-bold"
                                >
                                    LinkedIn
                                </label>
                                <span className="float-right text-sm font-semibold text-grayText">
                                    URL
                                </span>
                                <input
                                    id="linkedin"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    onChange={handleChange}
                                    value={info.linkedin}
                                ></input>
                            </div>
                            <div>
                                <label
                                    htmlFor="twitter"
                                    className="float-left font-bold"
                                >
                                    Twitter
                                </label>
                                <span className="float-right text-sm font-semibold text-grayText">
                                    URL
                                </span>
                                <input
                                    id="twitter"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    value={info.twitter}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div>
                                <label
                                    htmlFor="instagram"
                                    className="float-left font-bold"
                                >
                                    Instagram
                                </label>
                                <span className="float-right text-sm font-semibold text-grayText">
                                    URL
                                </span>
                                <input
                                    id="instagram"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    value={info.instagram}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div>
                                <label
                                    htmlFor="facebook"
                                    className="float-left font-bold"
                                >
                                    Facebook
                                </label>
                                <span className="float-right text-sm font-semibold text-grayText">
                                    URL
                                </span>
                                <input
                                    id="facebook"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    value={info.facebook}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex justify-center px-4 py-2 mt-6 mb-8 font-bold text-white bg-black rounded-md hover:drop-shadow-lg disabled:opacity-60"
                                aria-label="Submit"
                                disabled={disableSubmit}
                            >
                                {user
                                    ? "Save Changes"
                                    : "Signup to create a card"}
                            </button>
                        </form>
                    </div>
                </section>
                <section className="order-first md:order-last sm:bg-gradientBg text-white w-full p-6 sm:p-8 md:w-[45%] lg:w-[30%] 2xl:w-[30%] md:flex items-center md:fixed md:right-0 md:top-20 md:bottom-0 lg:pt-[90px]">
                    <Card
                        props={info}
                        styles=" md:absolute md:right-[5%] lg:right-[10%] xl:-left-[10%] sm:max-h-[325px] md:max-h-none sm:min-h-[17rem] sm:aspect-[16/11]"
                    />
                </section>
            </div>
        </article>
    );
}
