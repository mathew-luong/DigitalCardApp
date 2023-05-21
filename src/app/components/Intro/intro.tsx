import Image from "next/image";
import Link from "next/link";
import img from "../../../../public/images/pictures/intro.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function Intro() {
    return (
        <section className="px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-56 pt-36 pb-16 containerBg">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 place-items-center">
                <div className="flex flex-col gap-6">
                    <h1 className="lgHeader">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1]">
                            Share with others.
                        </span>{" "}
                        Anywhere. Anytime.
                    </h1>
                    <p className="text-grayText sm:max-w-[60ch] md:max-w-[40ch]">
                        Digital business cards are the new modern way to share
                        and network. With eBizz you can create a business card
                        in less than 5 minutes and share it with others by QR
                        code or link.
                    </p>
                    <Link
                        href="/login"
                        className="self-start px-4 py-2 mt-4 bg-black text-white rounded-md hover:drop-shadow-xl font-bold inline-flex items-center gap-2 group"
                    >
                        Get started
                        <IoArrowForwardOutline
                            size="24"
                            className="group-hover:block hidden w-4"
                        />
                        <IoIosArrowForward
                            size="24"
                            className="group-hover:hidden block w-4"
                        />
                    </Link>
                </div>
                <Image
                    src={img}
                    width={500}
                    // height={250}
                    priority
                    alt="How its made image"
                    className="max-w-full h-[20rem]"
                ></Image>
                {/* <div className="max-w-full h-[25rem] w-[80%] backdrop-blur-md bg-white/30 rounded-md flex justify-center items-center">
                    <Image
                        src={img}
                        width={500}
                        // height={250}
                        priority
                        alt="How its made image"
                        className="max-w-full h-[85%] w-[90%] rounded-full"
                    ></Image>
                </div> */}
            </div>
        </section>
    );
}
