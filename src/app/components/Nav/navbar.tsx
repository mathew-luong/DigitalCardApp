"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import AnimExpand from "../Animations/animExpand";
import NavSlider from "./nav";

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
                "fixed top-0 w-full flex justify-center flex-col sm:flex-row sm:justify-between px-8 md:px-16 2xl:px-56 gap-4 sm:gap-0 py-4 sm:py-8 items-center z-10 transition-all ease-in-out delay-100 " +
                ((pathname === "/" && offset > 1) || pathname !== "/"
                    ? "bg-opacity-100 bg-white "
                    : "bg-transparent ")
            }
        >
            <div className="grow basis-0 sm:flex sm:justify-start">
                <Link href="/" className="header2 text-pinkText">
                    EBIZZ
                </Link>
            </div>
            <NavSlider />
            <div className="gap-4 items-center hidden sm:flex grow basis-0 justify-end">
                <Link
                    href="/login"
                    className="font-bold active:text-slate-300 text-sm"
                >
                    Login
                </Link>
                <Link
                    href="/signup"
                    className="self-start px-4 py-2 text-sm bg-black text-white rounded-md hover:drop-shadow-lg font-bold"
                >
                    Signup
                </Link>
            </div>
        </header>
    );
}
