"use client";

import Link from "next/link";
import { QrCode } from "./qrcode";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { AuthContext } from "../context/authContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export function ShareSection() {
    const { user, isLoadingUser } = useContext(AuthContext);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
        },
    });

    const id = user?.uid;
    const path = process.env.NEXT_PUBLIC_WEBSITE_URL! + id;

    useEffect(() => {
        if (!user && !isLoadingUser) {
            toast("You must be logged in to share!", { icon: "❗" });
            router.push("/login");
        }
    });

    // Sends an email containing a link to the business card to the recipient
    const handleSendToEmail: SubmitHandler<FieldValues> = (data) => {
        let messageParams = {
            to_email: data.email,
            message: path,
        };
        emailjs
            .send(
                "service_ihw6c36",
                "template_kwgc80i",
                messageParams,
                process.env.NEXT_PUBLIC_EMAIL_KEY
            )
            .then(
                (res) => {
                    toast("Email sent.", {
                        icon: "✉️",
                    });
                },
                (err) => {
                    toast.error("Failed to send email.");
                }
            );
        reset();
    };

    const copyToClipboard = (text: string, result: boolean) => {
        if (result) {
            toast("Copied to clipboard.", {
                icon: "📎",
            });
        } else {
            toast.error("Failed to copy to clipboard.");
        }
    };

    return isLoadingUser ? (
        <></>
    ) : !user ? (
        <></>
    ) : (
        <div className="mx-auto max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] 2xl:max-w-[600px] rounded-xl p-6 mt-8 flex gap-6 flex-col bg-white relative shadow-xl">
            <Link
                href={`/${id}`}
                className="absolute px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 ease-in-out bg-white border-2 rounded-md border-pinkText hover:drop-shadow-xl top-6 right-6 hover:bg-pinkText hover:text-white"
            >
                Preview card
            </Link>
            <div className="flex flex-col gap-4 my-2">
                <h1 className="text-xl font-bold">Share your card</h1>
                <p className="text-grayText max-w-[25ch] sm:max-w-[30ch]">
                    Start connecting with others by sharing your card now.
                </p>
            </div>
            <div className="flex flex-col gap-2 qr">
                <QrCode url={path} />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-[#252525]">Email</h2>
                <form
                    className="flex w-full gap-2"
                    onSubmit={handleSubmit(handleSendToEmail)}
                >
                    <input
                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                        type="email"
                        placeholder="recipient@mail.com"
                        required
                        {...register("email", {
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                        })}
                    ></input>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:drop-shadow-xl shrink-0 disabled:opacity-50"
                    >
                        Send card
                    </button>
                </form>
                {errors.email && (
                    <span className="text-rose-500">
                        Email must be of the form: name@mail.com
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-[#252525]">Share via link</h2>
                <div className="flex items-center justify-between w-full px-2 py-2 overflow-x-hidden text-sm rounded-md bg-grayBg">
                    <div className="max-w-[63%] sm:max-w-[70%] overflow-hidden text-grayText whitespace-nowrap xl:max-w-[72.5%] 2xl:max-w-[80%] text-ellipsis">
                        {path}
                    </div>
                    <CopyToClipboard text={path} onCopy={copyToClipboard}>
                        <button className="px-4 py-[6px] text-sm bg-white rounded-md active:bg-slate-50 hover:drop-shadow-xl text-[#252525] disabled:opacity-50">
                            Copy link
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
}
