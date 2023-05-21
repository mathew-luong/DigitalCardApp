"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            // On the home page, header is transparent until the user scrolls, on other pages the header has a white background
            className={
                "fixed top-0 w-full flex justify-center sm:justify-between px-8 md:px-16 2xl:px-56 pt-8 pb-4 sm:py-4 items-center z-10 transition-all ease-in-out delay-100 " +
                ((pathname === "/" && offset > 1) || pathname !== "/"
                    ? "bg-opacity-100 bg-white "
                    : "bg-transparent ")
            }
        >
            <div className="grow basis-0 hidden sm:flex sm:justify-start">
                <Link href="/" className="header2 text-pinkText">
                    EBIZZ
                </Link>
            </div>
            <nav className="bg-grayBg p-[5px] rounded-3xl flex gap-4 text-grayText transition ease-in-out font-semibold text-sm">
                <Link
                    href="/"
                    className={pathname === "/" ? "navItemActive" : "navItem"}
                >
                    Home
                </Link>
                <Link
                    href="/create"
                    className={
                        pathname === "/create" ? "navItemActive" : "navItem"
                    }
                >
                    Create
                </Link>
                <Link
                    href="/card"
                    className={
                        pathname === "/card" ? "navItemActive" : "navItem"
                    }
                >
                    My Card
                </Link>
            </nav>
            <div className="gap-4 items-center hidden sm:flex grow basis-0 justify-end">
                <Link
                    href="/login"
                    className="font-bold hover:text-white active:text-slate-300 text-sm"
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
