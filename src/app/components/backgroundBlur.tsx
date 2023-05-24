type props = {
    direction: string;
};

export default function BackgroundBlur({ direction }: props) {
    return (
        <>
            {direction === "right" && (
                <div className="absolute top-0 right-0 blur-3xl">
                    <div
                        className="aspect-[16/9] w-[80vw] bg-gradient-to-r from-[#ec4899] to-[#6366f1] opacity-40"
                        style={{
                            clipPath:
                                // "polygon(48% 0, 89% 2%, 99% 1%, 100% 32%, 74% 17%, 51% 12%)",
                                "polygon(55% 0, 100% 0, 100% 30%, 100% 46%, 99% 40%, 86% 17%, 71% 13%, 57% 11%)",
                        }}
                    ></div>
                </div>
            )}
            {direction === "left" && (
                <div className="absolute top-0 left-0 md:left-0 blur-3xl">
                    <div
                        className="aspect-[16/9] w-[80vw] bg-gradient-to-r from-[#ec4899] to-[#6366f1] opacity-40"
                        style={{
                            clipPath:
                                // "polygon(0 0, 9% 0, 5% 11%, 8% 45%, 0 49%, 0 10%)",
                                "polygon(0 20%, 8% 22%, 5% 39%, 6% 64%, 0 73%, 0 38%)",
                        }}
                    ></div>
                </div>
            )}
        </>
    );
}
