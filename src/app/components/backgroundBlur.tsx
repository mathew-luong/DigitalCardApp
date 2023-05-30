type props = {
    direction: string;
};

export default function BackgroundBlur({ direction }: props) {
    return (
        <>
            {direction === "right" && (
                <div className="absolute top-0 right-0 blur-3xl -z-10">
                    <div
                        className="aspect-[16/9] w-[80vw] bg-[#0088ff] opacity-30"
                        style={{
                            clipPath:
                                // "polygon(55% 0, 100% 0, 100% 30%, 100% 46%, 99% 40%, 86% 17%, 71% 13%, 57% 11%)",
                                "polygon(95% 58%, 100% 56%, 100% 100%, 75% 100%, 52% 100%, 78% 91%, 91% 84%)",
                        }}
                    ></div>
                </div>
            )}
            {direction === "left" && (
                <div className="absolute top-0 left-0 md:left-0 blur-3xl -z-10">
                    <div
                        className="aspect-[16/9] w-[80vw] bg-[#ff5c87] opacity-30"
                        style={{
                            clipPath:
                                // "polygon(0 20%, 8% 22%, 5% 39%, 6% 64%, 0 73%, 0 38%)",
                                "polygon(0 30%, 4% 43%, 9% 59%, 6% 70%, 3% 78%, 6% 85%, 0 90%, 0 69%)",
                        }}
                    ></div>
                </div>
            )}
        </>
    );
}
