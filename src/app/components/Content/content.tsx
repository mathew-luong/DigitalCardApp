import Marquee from "react-fast-marquee";
import SlideUp from "../Animations/animSlideUp";
import Image from "next/image";
import black from "../../../../public/images/cards/black.png";
import column from "../../../../public/images/cards/column.png";
import gray from "../../../../public/images/cards/gray.png";
import orange from "../../../../public/images/cards/orange.png";
import purple from "../../../../public/images/cards/purple.png";
import standard from "../../../../public/images/cards/standard.png";
import white from "../../../../public/images/cards/white.png";
import whiteBlack from "../../../../public/images/cards/whiteBlack.png";

export default function Content() {
    return (
        <section className="w-full mx-auto mt-8 text-center sm:mt-24">
            <SlideUp width="w-full">
                <h1 className="mb-4 text-black header max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                    Simple, easy to configure, shareable
                    <span className="text-pinkText">.</span>
                </h1>
            </SlideUp>
            <SlideUp width="w-full">
                <p className="text-center text-grayText max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                    Take a look at some beautifully crafted business cards
                    below.
                </p>
            </SlideUp>

            <div className="max-w-full my-16">
                <Marquee className="items-stretch w-full h-full" speed={30}>
                    <div className="grid w-full h-full grid-flow-col grid-rows-4 gap-6">
                        <div className="flex items-center row-span-4 ml-6">
                            <Image
                                src={standard}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="row-span-3 row-start-2">
                            <Image
                                src={black}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="row-span-3 row-start-1">
                            <Image
                                src={whiteBlack}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="flex items-center row-span-4">
                            <Image
                                src={column}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="row-span-3 row-start-2">
                            <Image
                                src={orange}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="row-span-3 row-start-1">
                            <Image
                                src={white}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="row-span-3 row-start-2">
                            <Image
                                src={purple}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                        <div className="row-span-3 row-start-1">
                            <Image
                                src={gray}
                                width={350}
                                alt="standard card"
                            ></Image>
                        </div>
                    </div>
                </Marquee>
            </div>
            <SlideUp width="w-full">
                <h1 className="mb-4 text-black header max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto mt-16">
                    Made to be shared
                    <span className="text-pinkText">.</span>
                </h1>
            </SlideUp>
            <SlideUp width="w-full">
                <p className="text-center text-grayText max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto mb-24">
                    Take a look at some beautifully crafted business cards
                    below.
                </p>
            </SlideUp>
        </section>
    );
}
