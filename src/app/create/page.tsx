"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import BusinessCard from "../components/businessCard";
import Navbar from "../components/Nav/navbar";

export default function Login() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            title: "",
            company: "",
            website: "",
            linkedin: "",
            twitter: "",
            instagram: "",
            facebook: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("SUBMITTED");
        console.log(
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.title,
            data.company,
            data.website,
            data.linkedin,
            data.twitter,
            data.instagram,
            data.facebook
        );
    };

    return (
        <article>
            <Navbar />
            <div className="flex flex-col h-full pt-40 md:flex-row">
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
                            onSubmit={handleSubmit(onSubmit)}
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
                                        {...register("firstName", {
                                            pattern: /^[A-Za-z0-9]*$/,
                                        })}
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
                                        {...register("lastName")}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="font-bold">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    required
                                    {...register("email")}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="phone" className="font-bold">
                                    Phone number
                                </label>
                                <input
                                    id="phone"
                                    placeholder="Phone number"
                                    type="tel"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    required
                                    {...(register("phone"),
                                    { pattern: "[0-9]{3}[0-9]{3}[0-9]{4}" })}
                                ></input>
                                {/* errors will return when field validation fails  */}
                                {errors.phone && (
                                    <span className="text-rose-500">
                                        Phone number format 000-000-0000
                                    </span>
                                )}
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
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        {...register("title", {
                                            pattern: /^[A-Za-z0-9]*$/,
                                        })}
                                    ></input>
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="company"
                                        className="mt-2 font-bold"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="company"
                                        placeholder="Company"
                                        type="text"
                                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                        {...register("company")}
                                    ></input>
                                </div>
                            </div>
                            {/* errors will return when field validation fails  */}
                            {(errors.lastName || errors.firstName) && (
                                <span className="text-rose-500">
                                    Fields must only contain letters and/or
                                    numbers.
                                </span>
                            )}
                            <h2 className="mt-4 font-bold subHeader">
                                Additional Details
                            </h2>
                            <div>
                                <label htmlFor="website" className="font-bold">
                                    Website
                                </label>
                                <input
                                    id="website"
                                    placeholder="Website"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    {...register("website")}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="linkedin" className="font-bold">
                                    LinkedIn
                                </label>
                                <input
                                    id="linkedin"
                                    placeholder="LinkedIn"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    {...register("linkedin")}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="twitter" className="font-bold">
                                    Twitter
                                </label>
                                <input
                                    id="twitter"
                                    placeholder="Twitter"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    {...register("twitter")}
                                ></input>
                            </div>
                            <div>
                                <label
                                    htmlFor="instagram"
                                    className="font-bold"
                                >
                                    Instagram
                                </label>
                                <input
                                    id="instagram"
                                    placeholder="Instagram"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    {...register("instagram")}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="facebook" className="font-bold">
                                    Facebook
                                </label>
                                <input
                                    id="facebook"
                                    placeholder="Facebook"
                                    type="url"
                                    className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                                    {...register("facebook")}
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
                <section className="order-first md:order-last bg-gradientBg text-white w-full p-8 md:w-[45%] lg:w-[30%] 2xl:w-[30%] md:flex items-center md:fixed md:right-0 md:top-20 md:bottom-0 md:p-0">
                    <BusinessCard />
                </section>
                {/* <section>Hey</section> */}
            </div>
        </article>
    );
}
