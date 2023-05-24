"use client";
import { motion } from "framer-motion";

export default function AnimRotate({
    children,
    classes,
    direction = 5,
}: {
    children: React.ReactNode;
    classes?: string;
    direction?: number;
}) {
    return (
        <motion.div
            className={classes}
            initial={{ opacity: 0, rotate: direction }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
        >
            {children}
        </motion.div>
    );
}
