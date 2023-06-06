import SlideUp from "../Animations/animSlideUp";
import Image from "next/image";
import cardsImg from "../../../../public/images/pictures/cardsLarge.svg";
import cardsImgLg from "../../../../public/images/pictures/cards.svg";
import cardsImgMobile from "../../../../public/images/pictures/cards2.svg";

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
            <div className="px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%] mb-16 sm:mb-24 mt-12">
                {/* <Image
                    src={cardsImg}
                    alt="Card variants"
                    priority
                    className="hidden max-w-full mx-auto sm:block lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-full"
                /> */}
                <Image
                    src={cardsImgLg}
                    alt="Card variants"
                    priority
                    className="hidden max-w-full mx-auto sm:block lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-full"
                />
                <Image
                    src={cardsImgMobile}
                    alt="Card variants"
                    priority
                    className="block max-w-full mx-auto sm:hidden"
                />
            </div>
        </section>
    );
}
