"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full bg-white flex justify-center sm:justify-between px-8 md:px-16 py-4 items-center z-10">
            <div className="grow basis-0 hidden sm:flex justify-start">
                {" "}
                <Link href="/" className="header2 text-pinkText">
                    EBIZZ
                </Link>
            </div>
            <div className="bg-grayBg p-[5px] rounded-3xl flex gap-4 text-grayText transition ease-in-out font-semibold text-sm">
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
            </div>
            <div className="gap-4 items-center hidden sm:flex grow basis-0 justify-end">
                <Link
                    href="/login"
                    className="font-bold hover:text-pinkText active:text-pinkDark text-sm"
                >
                    Login
                </Link>
                <Link
                    href="/signup"
                    className="border rounded-md border-pinkText px-4 py-2 flex justify-center text-sm items-center text-black hover:bg-pinkText hover:text-white active:bg-pinkDark active:border-pinkDark"
                >
                    Signup
                </Link>
            </div>
        </nav>
    );
}
