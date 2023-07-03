"use client";

import { AuthContext } from "@/app/context/authContext";
import Link from "next/link";
import { useContext } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export function GetStartedBtn() {
    const { user } = useContext(AuthContext);

    let link;

    if (user) {
        link = "/create";
    } else {
        link = "/login";
    }

    return (
        <Link
            href={link}
            className="inline-flex items-center self-start gap-2 px-4 py-2 mt-2 mb-[8px] mr-[8px] font-semibold text-white bg-black rounded-md hover:drop-shadow-lg group"
        >
            Get started
            <IoArrowForwardOutline
                size="24"
                className="w-4 transition-all ease-in group-hover:-rotate-45 group-hover:"
            />
        </Link>
    );
}
