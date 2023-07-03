"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function BackBtn({ styles }: { styles: string }) {
    const router = useRouter();

    const handleBtn = () => {
        router.push("/");
    };

    return (
        <button type="button" className={styles} onClick={handleBtn}>
            <FiArrowLeft size="28" className="text-black" />
        </button>
    );
}
