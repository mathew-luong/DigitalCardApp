import { AnimMouse } from "../Animations/animMouse";
import SlideUp from "../Animations/animSlideUp";

export default function Content() {
    return (
        <div className="w-full mx-auto mt-8 text-center sm:mt-24">
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

            <div className="h-[36rem] mx-auto p-6 max-w-full">
                {/* TOO LARGE FOR SMALL SCREEN SIZES */}
                {/* <AnimMouse /> */}
            </div>
        </div>
    );
}
