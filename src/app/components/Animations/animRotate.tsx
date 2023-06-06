"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimRotate({
    children,
    classes,
    direction = 10,
}: {
    children: React.ReactNode;
    classes?: string;
    direction?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const rotateControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            rotateControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div
            className={classes}
            variants={{
                hidden: {
                    opacity: 0,
                    rotate: direction,
                },
                visible: {
                    opacity: 1,
                    rotate: 0,
                },
            }}
            initial="hidden"
            animate={rotateControls}
            transition={{ duration: 1, delay: 0 }}
            ref={ref}
        >
            {children}
        </motion.div>
    );
}
