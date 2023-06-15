"use client";

import { AuthContext } from "@/app/context/authContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const duration = 0.4;

export default function NavSlider() {
    const pathname = usePathname();

    const { handleSignOut, user, isLoadingUser } = useContext(AuthContext);

    return (
        <nav className="bg-grayBg p-[5px] rounded-3xl flex gap-2 text-grayText font-semibold text-sm relative items-start content-start justify-start">
            <motion.div
                className="relative flex items-center justify-center h-8 px-4 py-0 rounded-3xl"
                animate={{
                    color: pathname === "/" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link
                    href="/"
                    className="relative z-10 grid w-full h-full place-content-center"
                >
                    Home
                </Link>
                {pathname === "/" && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            <motion.div
                className="relative flex items-center justify-center h-8 px-4 py-0 rounded-3xl"
                animate={{
                    color: pathname === "/create" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link
                    href="/create"
                    className="relative z-10 grid w-full h-full place-content-center"
                >
                    Create
                </Link>
                {pathname === "/create" && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            <motion.div
                className="relative flex items-center justify-center h-8 px-4 py-0 rounded-3xl"
                animate={{
                    color: pathname === "/share" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link
                    href="/share"
                    className="relative z-10 grid w-full h-full place-content-center"
                >
                    Share
                </Link>
                {pathname === "/share" && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            {isLoadingUser ? (
                <></>
            ) : user ? (
                <motion.div
                    className="relative flex items-center justify-center h-8 px-4 py-0 rounded-3xl sm:hidden"
                    animate={{
                        color: pathname === "/logout" ? "#000" : "#686868",
                    }}
                    transition={{ duration }}
                >
                    <button
                        onClick={() => handleSignOut()}
                        className="relative z-10 grid w-full h-full place-content-center"
                    >
                        Logout
                    </button>
                    {pathname === "/logout" && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
                            layoutId="selected"
                            animate={{ backgroundColor: "#fff" }}
                            transition={{ duration }}
                        ></motion.div>
                    )}
                </motion.div>
            ) : (
                <motion.div
                    className="relative flex items-center justify-center h-8 px-4 py-0 rounded-3xl sm:hidden"
                    animate={{
                        color: pathname === "/login" ? "#000" : "#686868",
                    }}
                    transition={{ duration }}
                >
                    <Link
                        href="/login"
                        className="relative z-10 grid w-full h-full place-content-center"
                    >
                        Login
                    </Link>
                    {pathname === "/login" && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
                            layoutId="selected"
                            animate={{ backgroundColor: "#fff" }}
                            transition={{ duration }}
                        ></motion.div>
                    )}
                </motion.div>
            )}
            {/* <motion.div
                className="relative flex items-center justify-center h-8 px-4 py-0 rounded-3xl sm:hidden"
                animate={{
                    color: pathname === "/login" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link
                    href="/login"
                    className="relative z-10 grid w-full h-full place-content-center"
                >
                    Login
                </Link>
                {pathname === "/login" && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div> */}
        </nav>
    );
}
