"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimSlide({
    children,
    direction,
}: {
    children: React.ReactNode;
    direction: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="box-border w-full overflow-hidden ">
            <span
                style={{
                    transform: isInView ? "none" : `translateX(${direction})`,
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="translate-x-[100px] opacity-0 block"
            >
                {children}
            </span>
        </div>
    );
}
