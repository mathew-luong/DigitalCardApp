"use client";
import { motion } from "framer-motion";

export default function AnimExpand({
    children,
    classes,
}: // direction = 5,
{
    children: React.ReactNode;
    classes?: string;
    // direction?: number;
}) {
    return (
        <motion.div
            className={classes}
            initial={{
                opacity: 0,
                scaleX: 0,
            }}
            animate={{
                opacity: 1,
                scaleX: 1,
            }}
            transition={{ duration: 1, delay: 0.25 }}
        >
            {children}
        </motion.div>
    );
}
