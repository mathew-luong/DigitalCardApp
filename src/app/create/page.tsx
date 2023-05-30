"use client";
import { useState } from "react";
import BusinessCard from "../components/businessCard";
import Navbar from "../components/Nav/navbar";

export default function Login() {
    // const [info, setInfo] = useState(getInfo)
    const [info, setInfo] = useState({
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
    });

    // Updates the state for the corresponding form input field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInfo({ ...info, [e.target.id]: value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("SUBMITTED");
        // console.log(
        //     data.firstName,
        //     data.lastName,
        //     data.email,
        //     data.phone,
        //     data.title,
        //     data.company,
        //     data.website,
        //     data.linkedin,
        //     data.twitter,
        //     data.instagram,
        //     data.facebook
        // );
    };

    return (
        <article>
            <Navbar />
            <div className="flex flex-col h-full pt-40 sm:pt-32 md:pt-36 md:flex-row">
                <section className="bg-white flex-grow mt-6 md:mt-0 flex justify-center items-center md:w-full md:mr-[55%] lg:mr-[33%] gap-6 md:min-h-full md:overflow-scroll overflow-y-visible pb-8">
                    {/* CENTER INPUT SECTION */}
                    {/* <section className="flex items-center justify-center flex-grow gap-6 py-8 overflow-y-visible bg-white md:min-h-full md:overflow-scroll"> */}
                    <div className="flex flex-col gap-6 w-[85%] md:w-[60%] xl:w-[45%]">
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
                                        placeholder="First name"
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
                                        placeholder="Last name"
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
                                        placeholder="Title"
                                        type="text"
                                        required
                                        value={info.title}
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="company"
                                        className="float-left font-bold"
                                    >
                                        Company
                                    </label>
                                    <span className="block float-right text-sm italic text-grayText md:hidden lg:block">
                                        optional
                                    </span>
                                    <input
                                        id="company"
                                        placeholder="Company"
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
                                <span className="float-right text-sm italic text-grayText">
                                    1234567890
                                </span>
                                <input
                                    id="phone"
                                    placeholder="Phone number"
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
                                <span className="float-right text-sm italic text-grayText">
                                    name@mail.com
                                </span>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    required
                                    value={info.email}
                                    onChange={handleChange}
                                ></input>
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
                                <span className="float-right text-sm italic text-grayText">
                                    URL
                                </span>
                                <input
                                    id="website"
                                    placeholder="Website"
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
                                <span className="float-right text-sm italic text-grayText">
                                    URL
                                </span>
                                <input
                                    id="linkedin"
                                    placeholder="LinkedIn"
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
                                <span className="float-right text-sm italic text-grayText">
                                    URL
                                </span>
                                <input
                                    id="twitter"
                                    placeholder="Twitter"
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
                                <span className="float-right text-sm italic text-grayText">
                                    URL
                                </span>
                                <input
                                    id="instagram"
                                    placeholder="Instagram"
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
                                <span className="float-right text-sm italic text-grayText">
                                    URL
                                </span>
                                <input
                                    id="facebook"
                                    placeholder="Facebook"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    value={info.facebook}
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex justify-center px-4 py-2 mt-6 mb-8 font-bold text-white bg-black rounded-md hover:drop-shadow-lg"
                                aria-label="Submit"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </section>
                <section className="order-first md:order-last sm:bg-gradientBg text-white w-full p-6 sm:p-8 md:w-[45%] lg:w-[30%] 2xl:w-[30%] md:flex items-center md:fixed md:right-0 md:top-20 md:bottom-0 md:p-0">
                    <BusinessCard
                        props={info}
                        styles=" md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] sm:max-h-[325px] md:max-h-none sm:min-h-[17rem] sm:aspect-[16/11]"
                    />
                </section>
            </div>
        </article>
    );
}
