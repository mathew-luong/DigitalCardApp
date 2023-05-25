import { HiOutlinePhone, HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Train_One } from "next/font/google";
import { useEffect } from "react";

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

type props = {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
    email: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
};

export default function BusinessCard() {
    // export default function BusinessCard({name, title, company, email, website, linkedin, twitter, instagram, facebook}: props) {
    let firstName = "Mathew".toUpperCase();
    let lastName = "Luong".toUpperCase();
    let title = "Software Developer";
    let company = "Microsoft";
    let phone = "587-890-4493";
    let email = "mathewluong7@gmail.com";
    let website = "https://www.linkedin.com/in/mathew-luong/";
    let linkedin = "https://www.linkedin.com/in/mathew-luong/";
    let twitter = "https://www.linkedin.com/in/mathew-luong/";
    let instagram = "https://www.linkedin.com/in/mathew-luong/";
    let facebook = "https://www.linkedin.com/in/mathew-luong/";

    // useEffect(() => {

    // }, [props])

    return (
        // <AnimShape classes="p-4 bg-[#000000] rounded-xl md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] min-h-[15rem] sm:min-h-[17rem] sm:aspect-[16/10]">
        <div className="md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] sm:min-h-[17rem] sm:aspect-[16/11] sm:mx-auto sm:max-h-[325px] md:max-h-none">
            {firstName.length === 0 && (
                <div className="py-4 xl:py-6 2xl:py-8 3xl:py-12 bg-[#000000] flex flex-col gap-4 rounded-xl">
                    <div className="flex flex-col gap-2 px-4 xl:px-6 2xl:px-8 3xl:px-8">
                        <h1
                            className={
                                font.className +
                                " colorText text-2xl 2xl:text-4xl 3xl:text-5xl"
                            }
                        >
                            {firstName} {lastName}
                        </h1>
                        <h2 className="text-lg font-bold lg:text-xl 2xl:text-2xl 3xl:text-3xl">
                            {title} - {company}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2 px-4 py-2 xl:px-6 2xl:px-8 3xl:px-8 3xl:py-8 3xl:gap-4 2xl:text-2xl cardBg">
                        <a
                            href={`tel:${phone}`}
                            className="inline-flex items-center gap-2 hover:colorText group"
                        >
                            <HiOutlinePhone className="text-white" />
                            {phone}
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 hover:colorText"
                        >
                            <HiOutlineMail className="text-white" />
                            {email}
                        </a>
                        <a
                            href={website}
                            className={
                                website.length !== 0
                                    ? "inline-flex items-center gap-2 hover:colorText visible pointer-events-auto"
                                    : "inline-flex items-center gap-2 hover:colorText invisible pointer-events-none"
                            }
                        >
                            <HiOutlineLink className="text-white" />
                            My website
                        </a>
                    </div>

                    <div className="flex px-4 mb-1 bg-yelleow-400 xl:px-6 2xl:px-8 max-w-[60%] lg:max-w-[50%] justify-beetween gap-4">
                        <a
                            href={linkedin}
                            className="inline-flex items-center hover:text-[#0e76a8]"
                        >
                            <BsLinkedin size="22" />
                        </a>
                        <a
                            href={twitter}
                            className="inline-flex items-center hover:text-[#1DA1F2]"
                        >
                            <BsTwitter size="22" />
                        </a>
                        <a
                            href={instagram}
                            className="inline-flex items-center hover:text-[#E1306C]"
                        >
                            <BsInstagram size="22" />
                        </a>
                        <a
                            href={facebook}
                            className="inline-flex items-center hover:text-[#4267B2]"
                        >
                            <BsFacebook size="22" />
                        </a>
                    </div>
                </div>
            )}
            {firstName.length !== 0 && (
                <div className="py-4 xl:py-6 2xl:py-8 3xl:py-12 bg-[#000000] flex flex-col gap-4 rounded-xl min-h-[14rem] sm:min-h-[17rem] 3xl:min-h-[20rem] items-center justify-center">
                    <h1 className="px-4 text-2xl font-bold 2xl:text-4xl 3xl:text-5xl xl:px-6 2xl:px-8 3xl:px-8">
                        Start creating your card now!
                    </h1>
                </div>
            )}
        </div>

        // </AnimShape>
    );
}
