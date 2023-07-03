"use client";
import { motion } from "framer-motion";

export default function AnimExpand({
    children,
    classes,
}: {
    children: React.ReactNode;
    classes?: string;
}) {
    return (
        <motion.div
            className={classes}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                opacity: {
                    duration: 0.5,
                    delay: 0.15,
                },
            }}
        >
            {children}
        </motion.div>
    );
}
