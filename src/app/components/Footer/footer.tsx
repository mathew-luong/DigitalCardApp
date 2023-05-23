import Link from "next/link";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Train_One } from "next/font/google";
import logo from "../../../../public/images/Logo.svg";
import Image from "next/image";

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between gap-6 px-12 py-10 bg-black sm:gap-0 sm:flex-row sm:px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72">
            <div className="flex items-start justify-center sm:hidden lg:flex">
                <Image
                    src={logo}
                    width={150}
                    alt="CVVNECT logo"
                    className="object-contain"
                ></Image>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-semibold text-white">Company</span>
                <Link href="/about" className="text-[#DADADA] hover:text-white">
                    About
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Blog
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Careers
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Security
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-semibold text-white">FAQ</span>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    License
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Policy
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-semibold text-white">Support</span>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Privacy Notice
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Cookies
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Terms & Conditions
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {/* <h1 className="hidden -mb-2 text-white header2 sm:block lg:hidden">
                    CVNNECT
                </h1> */}
                <Link
                    href="/login"
                    className="flex items-center justify-center p-2 font-bold text-white transition-colors duration-500 ease-in-out delay-75 border border-white rounded-md hover:bg-white hover:text-black active:bg-gray active:border-gray"
                >
                    Login
                </Link>
                <div className="flex justify-center gap-4">
                    <a href="https://facebook.com" target="_blank">
                        <FaFacebookSquare
                            size="24"
                            className="text-[#DADADA] ease-in duration-200 hover:text-white"
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <FaTwitter
                            size="24"
                            className="text-[#DADADA] hover:text-white ease-in duration-200"
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <AiFillInstagram
                            size="24"
                            className="text-[#DADADA] hover:text-white ease-in duration-200"
                        />
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <AiFillYoutube
                            size="24"
                            className="text-[#DADADA] hover:text-white ease-in duration-200"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
