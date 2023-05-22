import { motion } from "framer-motion";

export default function AnimExpand({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            // className="opacity-0"
            animate={{
                scaleX: [0, 1],
                // opacity: [0, 1],
                // rotate: [0, 360],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [1],
                repeat: 0,
            }}
        >
            {children}
        </motion.div>
    );
}
