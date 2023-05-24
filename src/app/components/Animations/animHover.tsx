import { useState } from "react";
import { motion } from "framer-motion";

export function AnimHover() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="link-animation">
            <div
                className=""
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                {"hover".split("").map((letter, i) => (
                    <div className="" key={i}>
                        <div>{letter}</div>
                        <motion.div
                            initial={{ left: "-100%" }}
                            animate={{ left: isHovered ? "0%" : "-100%" }}
                            transition={{
                                duration: isHovered ? 0.7 : 0.5,
                                ease: [0.7, 0, 0.3, 1],
                            }}
                        >
                            {letter.toUpperCase()}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
