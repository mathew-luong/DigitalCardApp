"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function BackBtn() {
    const router = useRouter();

    const handleBtn = () => {
        router.back();
    };

    return (
        <button
            type="button"
            className="absolute hidden md:flex items-center bg-white p-2 top-6 left-6 ease-in duration-300 rounded-full ring-white/50 hover:ring-6 active:bg-[#F0F0F0]"
            onClick={handleBtn}
        >
            <FiArrowLeft size="28" className="text-black" />
        </button>
    );
}
