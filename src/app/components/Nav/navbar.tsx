"use client";

import Link from "next/link";
import { useContext } from "react";
import NavSlider from "./navSlider";
import { Train_One } from "next/font/google";
import { AuthContext } from "@/app/context/authContext";

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
    const { handleSignOut, user, isLoadingUser } = useContext(AuthContext);

    // First letter of logged in users name, used as nav bar profile
    // Guest accounts have ?
    const getFirstLetter = () => {
        if (user?.email) {
            return user.email.charAt(0).toUpperCase();
        }
        return "?";
    };

    return (
        <header
            className={
                "fixed top-0 w-full flex justify-center flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 py-4 sm:py-6 items-center z-50 transition-all ease-in-out px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%] bg-opacity-100 bg-white "
            }
        >
            <div className="grow basis-0 sm:flex sm:justify-start">
                <Link href="/" className="header2 sm:text-[1.5rem] colorText">
                    <span className={font.className + " active:text-pinkText"}>
                        CVNNECT
                    </span>
                </Link>
            </div>
            <NavSlider />
            <div className="items-center justify-end hidden gap-4 sm:flex grow basis-0">
                {isLoadingUser ? (
                    <></>
                ) : user ? (
                    <>
                        <span className="flex items-center justify-center h-[35px] w-[35px] font-bold text-white rounded-full bg-pinkText">
                            {getFirstLetter()}
                        </span>
                        <button
                            onClick={() => handleSignOut()}
                            className="self-start px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:drop-shadow-lg"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="text-sm font-semibold active:text-slate-600"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="self-start px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:drop-shadow-lg"
                        >
                            Signup
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
