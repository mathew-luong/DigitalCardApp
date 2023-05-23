"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import NavSlider from "./navSlider";
import { Train_One } from "next/font/google";

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
    const pathname = usePathname();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        // Handle nav bar background when scroll
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={
                "fixed top-0 w-full flex justify-center flex-col sm:flex-row sm:justify-between px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 gap-4 sm:gap-0 py-4 sm:py-6 items-center z-50 transition-all ease-in-out delay-100 " +
                ((pathname === "/" && offset > 1) || pathname !== "/"
                    ? "bg-opacity-100 bg-white "
                    : "bg-transparent ")
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
                <Link
                    href="/login"
                    className="text-sm font-bold active:text-slate-600"
                >
                    Login
                </Link>
                <Link
                    href="/signup"
                    className="self-start px-4 py-2 text-sm font-bold text-white bg-black rounded-md hover:drop-shadow-lg"
                >
                    Signup
                </Link>
            </div>
        </header>
    );
}
