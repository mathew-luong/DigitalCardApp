import SlideUp from "../components/Animations/animSlideUp";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Nav/navbar";
import picture from "../../../public/images/pictures/heroPicture.svg";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Navbar />
            <section className="px-12 pb-16 md:px-28 lg:px-36 xl:px-48 2xl:px-72 z-1 3xl:px-[25%] mt-40 sm:mt-32 md:mt-36">
                <div className="w-full mx-auto text-center">
                    <SlideUp width="w-full">
                        <h1 className="font-bold header">
                            About
                            <span className="text-pinkText">.</span>
                        </h1>
                        <h2 className="subHeader">
                            CVNNECT is all about making it easy to share YOU
                            with others.
                        </h2>
                    </SlideUp>

                    <Image
                        src={picture}
                        width={500}
                        priority
                        alt="How its made image"
                        className="max-w-full h-[100%] mx-auto my-10"
                    ></Image>
                    <p className="mt-6 text-[#686868] max-w-[60ch] mx-auto">
                        CVNNECT was created by{" "}
                        <a
                            href="https://mathew-luong.github.io/"
                            className="transition-all hover:font-bold"
                        >
                            mathew-luong.github.io
                        </a>
                        , as a way to make it easier to share information with
                        other people. CVNNECT is all about making it easy to
                        share YOU with others. CVNNECT is all about making it
                        easy to share YOU with others. CVNNECT is all about
                        making it easy to share YOU with others.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
