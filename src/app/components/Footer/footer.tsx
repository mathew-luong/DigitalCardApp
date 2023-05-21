import Link from "next/link";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="bg-brownBg flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between px-12 py-10 sm:p-8 md:px-16 md:py-12 2xl:px-56">
            <h1 className="header2 text-white sm:hidden md:block">EBIZZ</h1>
            <div className="flex flex-col gap-2">
                <span className="text-white font-semibold">Company</span>
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
                <span className="text-white font-semibold">FAQ</span>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    License
                </Link>
                <Link href="/" className="text-[#DADADA] hover:text-white">
                    Policy
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-white font-semibold">Support</span>
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
                <h1 className="header2 text-white hidden sm:block md:hidden -mb-2">
                    EBIZZ
                </h1>
                <Link
                    href="/login"
                    className="border rounded-md border-white p-2 flex justify-center items-center text-white font-bold hover:bg-white hover:text-black active:bg-gray active:border-gray transition-colors ease-in-out delay-75 duration-500"
                >
                    Login
                </Link>
                <div className="flex gap-4 justify-center">
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
