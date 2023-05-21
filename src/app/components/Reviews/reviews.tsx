import Image from "next/image";
import img from "../../../../public/images/pictures/information.svg";

export default function Reviews() {
    return (
        <section className="flex flex-col px-12 md:px-36 lg:px-48 py-16 xl:px-48 2xl:px-56">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 justify-items-center items-center">
                <div className="">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#6366f1] font-bold text-lg">
                        Designed for everyone
                    </span>
                    <h1 className="lgHeader my-4">How it Works</h1>
                    <p className="text-grayText">
                        Digital business cards are the new modern way to share
                        and network. With eBizz you can create a business card
                        in less than 5 minutes and share it with others by QR
                        code or link.
                    </p>
                </div>
                <div className="flex">
                    <Image
                        src={img}
                        width={500}
                        // height={250}
                        priority
                        alt="How its made image"
                        className="max-w-full self-center h-[90%]"
                    ></Image>
                </div>
            </div>
            <hr className="text-gray my-12"></hr>
            <div>
                <div>
                    <h1 className="header2 font-bold mb-4">
                        “Time savings is the most important thing for us. It’s
                        been massive. I can share with 50 people in five seconds
                        with eBizz.”
                    </h1>
                    <h2 className="text-grayText">
                        Dwayne Johnson, President of Facebook
                    </h2>
                </div>
            </div>
        </section>
    );
}
