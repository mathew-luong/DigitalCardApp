"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    width?: "w-fit" | "w-full";
    shapeAnim?: boolean;
    styles?: string;
    delayTime?: number;
}

export default function SlideUp({
    children,
    width = "w-fit",
    shapeAnim = false,
    styles,
    delayTime = 0.25,
}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const slideControls = useAnimation();
    const shapeControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            shapeControls.start("visible");
        }
    }, [isInView]);

    return (
        <div
            className={"relative overflow-hidden " + width + " " + styles}
            ref={ref}
        >
            {/* Slide up animation */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{
                    duration: 0.5,
                    delay: delayTime,
                }}
            >
                {children}
            </motion.div>
            {/* Slide in shape animation, only occurs when specified */}
            {shapeAnim && (
                <motion.div
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={shapeControls}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                        delay: delayTime - 0.25,
                    }}
                    className="absolute left-0 right-0 z-20 bg-pinkText top-1 bottom-1"
                ></motion.div>
            )}
        </div>
    );
}
