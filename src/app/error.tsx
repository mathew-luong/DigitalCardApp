"use client";

import Link from "next/link";

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="font-bold colorText text-[4rem]">&#58;&#40;</h1>
            <h2 className="mt-2 mb-10 font-semibold header2">
                Oops! Something went wrong.
            </h2>
            <Link
                href="/"
                className="px-4 py-2 text-sm font-bold text-white bg-black rounded-md hover:drop-shadow-xl"
            >
                Return home
            </Link>
        </div>
    );
}
