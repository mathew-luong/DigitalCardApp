import SlideUp from "../../Animations/animSlideUp";
import { PriceCard } from "./priceCard";

export default function Content() {
    return (
        <section className="w-full mx-auto mt-8 sm:mt-24">
            <div className="">
                <SlideUp width="w-full" delayTime={0}>
                    <h1 className="mb-4 text-black header px-12 sm:px-0 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto text-center">
                        Intuitive, contactless, shareable
                        <span className="text-pinkText">.</span>
                    </h1>
                </SlideUp>
                <SlideUp width="w-full" delayTime={0}>
                    <p className="text-center text-grayText px-12 sm:px-0 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                        Take a look at some beautifully crafted business cards
                        below.
                    </p>
                </SlideUp>
                <div className="px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%] mb-16 sm:mb-24 mt-12">
                    <div className="w-full h-[300px] sm:h-[450px] bg-center bg-cover bg-img rounded-lg sm:max-h-[650px] sm:min-h-[300px]"></div>
                </div>
            </div>
            <div className="mb-10">
                <h1 className="mb-4 text-black header px-12 sm:px-0 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto text-center">
                    Simple prices, no hidden fees
                    <span className="text-pinkText">.</span>
                </h1>
                <p className="text-center text-grayText px-12 sm:px-0 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[720px] mx-auto">
                    Test it out for free, no credit card required.
                </p>
            </div>
            <div className="px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%] mb-24 w-full max-w-full grid grid-flow-row gap-12 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <PriceCard
                    name="Starter"
                    price="0"
                    attr1="1 card"
                    attr2="8 card templates"
                    btn="Get started"
                    message="Enjoy the features of CVNNECT, free of charge."
                />
                <PriceCard
                    name="Pro"
                    price="3"
                    attr1="1 card"
                    attr2="10 card templates"
                    btn="Coming soon"
                    message="Get access to 2 more card templates for only $5/mo."
                />
                <PriceCard
                    name="Premium"
                    price="5"
                    attr1="Profile picture"
                    attr2="12 card templates"
                    btn="Coming soon"
                    message="Go premium and gain access to a profile picture and 4 more templates."
                />
            </div>
            <hr className="my-16 text-gray mx-12 md:mx-28 lg:mx-36 xl:mx-48 2xl:mx-72 3xl:mx-[25%]"></hr>

            <div className="flex flex-col sm:flex-row px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%] mb-24 items-center">
                <div className="sm:w-1/2">
                    <h1 className="sm:max-w-[70%] header mb-8 sm:mb-0">
                        Make networking easy for you
                    </h1>
                </div>
                <div className="sm:w-1/2">
                    <p className="mb-8 text-sm text-grayText">
                        Whether you&apos;re new or already have a digital
                        business card, we&apos;ll help you modernize and
                        digitally transform your business card.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <SlideUp width="w-full" delayTime={0}>
                                <h1 className="font-semibold header2">2m+</h1>
                                <p className="text-sm text-grayText">Users</p>
                            </SlideUp>
                        </div>
                        <div className="bg-[#d9d8d8] w-[1px] h-[45px]"></div>
                        <div className="flex flex-col">
                            <SlideUp width="w-full" delayTime={0.4}>
                                <h1 className="font-semibold header2">1.5m</h1>
                                <p className="text-sm text-grayText">
                                    Created Cards
                                </p>
                            </SlideUp>
                        </div>
                        <div className="bg-[#d9d8d8] w-[1px] h-[45px]"></div>
                        <div className="flex flex-col">
                            <SlideUp width="w-full" delayTime={0.8}>
                                <h1 className="font-semibold header2">5.0</h1>
                                <p className="text-sm text-grayText">Stars</p>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
