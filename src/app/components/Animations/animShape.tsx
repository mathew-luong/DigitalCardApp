import { motion } from "framer-motion";

export default function AnimShape({
    children,
    classes,
}: {
    children: React.ReactNode;
    classes: string;
}) {
    return (
        <motion.div
            className={classes}
            animate={{
                scale: [1, 1.05, 1],
                // rotate: [0, 360],
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                times: [1],
                repeat: 0,
            }}
        >
            {children}
        </motion.div>
    );
}
