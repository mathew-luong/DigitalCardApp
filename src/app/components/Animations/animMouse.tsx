"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function AnimMouse() {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    // const rotateX = useTransform(y, [0, 400], [45, -45]);
    // const rotateY = useTransform(x, [0, 400], [-45, 45]);
    const rotateX = useTransform(y, [0, 400], [15, -15]);
    const rotateY = useTransform(x, [0, 400], [-15, 15]);

    function handleMouse(event: React.MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.div
            style={{
                perspective: 400,
            }}
            className="w-[400px] h-[400px] flex place-items-center place-content-center mx-auto border-black border-2"
            onMouseMove={handleMouse}
        >
            <motion.div
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                className="w-[150px] h-[150px] rounded-3xl bg-black bg-opacity-10 justify-center items-center flex"
            >
                This is the center
            </motion.div>
        </motion.div>
    );
}
