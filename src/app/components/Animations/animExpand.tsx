"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimExpand({
    children,
    classes,
}: // direction = 5,
{
    children: React.ReactNode;
    classes?: string;
    // direction?: number;
}) {
    const transition = {
        duration: 0.8,
        ease: [0.06, 0.69, 0.33, 0.97],
    };

    return (
        <motion.div
            className={classes}
            initial={{
                opacity: 0,
                scaleY: 0,
            }}
            animate={{
                opacity: 1,
                scaleY: 1,
            }}
            // transition={{
            //     scaleY: {
            //         duration: 1,
            //     },
            //     // opacity: {
            //     //     duration: 0.25,
            //     //     delay: 0.15,
            //     // },
            // }}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}
