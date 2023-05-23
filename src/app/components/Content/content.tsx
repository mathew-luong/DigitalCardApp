import SlideUp from "../Animations/animSlideUp";

export default function Content() {
    return (
        <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto text-center mt-8 sm:mt-24">
            <SlideUp width="w-full">
                <h1 className="mb-4 text-black header">
                    Simple, easy to configure, shareable
                    <span className="text-pinkText">.</span>
                </h1>
            </SlideUp>
            <SlideUp width="w-full">
                <p className="text-center text-grayText">
                    Take a look at some beautifully crafted business cards
                    below.
                </p>
            </SlideUp>

            <div className="h-[36rem]"></div>
        </div>
    );
}
