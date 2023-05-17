import Image from "next/image";
import img from "../../../../public/howItsMade.jpg";

export default function Reviews() {
    return (
        <section className="flex flex-col px-16 md:px-36 lg:px-48 py-16">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-32">
                <div className="sm:w-[50%]">
                    <h1 className="header mb-4">How it Works</h1>
                    <p className="text-grayText">
                        Digital business cards are the new modern way to share
                        and network. With eBizz you can create a business card
                        in less than 5 minutes and share it with others by QR
                        code or link.
                    </p>
                </div>
                <Image
                    src={img}
                    width={500}
                    // height={250}
                    alt="How its made image"
                    className="rounded-full max-w-full h-56 self-center"
                ></Image>
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
