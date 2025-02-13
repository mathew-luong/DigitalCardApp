"use client";

import Link from "next/link";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Train_One } from "next/font/google";
import logo from "../../../../public/images/pictures/Logo.svg";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/app/context/authContext";

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

export default function Footer() {
    const {
        handleSignInWithGoogle,
        handleLoginWithEmail,
        handleSignOut,
        user,
        isLoadingUser,
    } = useContext(AuthContext);

    return (
        <footer className="flex flex-col justify-between gap-6 py-10 bg-black sm:gap-0 sm:flex-row px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%]">
            <div className="flex flex-col items-center gap-2">
                <svg
                    width="150"
                    height="50"
                    viewBox="0 0 198 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="200" height="50" fill="black" />
                    <path
                        d="M35.344 37.376C34.5053 39.008 33.202 40.3 31.434 41.252C29.6887 42.204 27.6827 42.68 25.416 42.68C22.8773 42.68 20.6447 42.1133 18.718 40.98C16.814 39.824 15.318 38.2033 14.23 36.118C13.1647 34.01 12.632 31.528 12.632 28.672C12.632 25.8613 13.1647 23.4133 14.23 21.328C15.318 19.2427 16.814 17.6333 18.718 16.5C20.6447 15.344 22.866 14.766 25.382 14.766C26.9913 14.766 28.4533 14.9927 29.768 15.446C31.0827 15.8993 32.2047 16.5227 33.134 17.316C34.0633 18.1093 34.7433 19.016 35.174 20.036L34.052 21.056C33.0773 19.3107 31.842 18.098 30.346 17.418C28.85 16.738 27.1953 16.398 25.382 16.398C23.1607 16.398 21.2113 16.908 19.534 17.928C17.8793 18.948 16.5873 20.376 15.658 22.212C14.7287 24.048 14.264 26.2013 14.264 28.672C14.264 31.188 14.7287 33.3753 15.658 35.234C16.5873 37.0927 17.8907 38.532 19.568 39.552C21.2453 40.572 23.1947 41.082 25.416 41.082C27.184 41.082 28.8047 40.7307 30.278 40.028C31.774 39.3253 33.1113 38.0787 34.29 36.288L35.344 37.376ZM32.828 34.826C31.944 36.186 30.89 37.1947 29.666 37.852C28.442 38.4867 27.2067 38.804 25.96 38.804C24.464 38.804 23.0813 38.43 21.812 37.682C20.5653 36.934 19.568 35.812 18.82 34.316C18.072 32.82 17.698 30.9387 17.698 28.672C17.698 26.496 18.072 24.66 18.82 23.164C19.568 21.668 20.5653 20.546 21.812 19.798C23.0587 19.0273 24.43 18.642 25.926 18.642C27.1273 18.642 28.3287 18.9593 29.53 19.594C30.7313 20.206 31.7173 21.1807 32.488 22.518L31.298 23.606C31.026 22.994 30.6067 22.4387 30.04 21.94C29.496 21.4187 28.8613 21.0107 28.136 20.716C27.4107 20.4213 26.674 20.274 25.926 20.274C24.702 20.274 23.5913 20.6027 22.594 21.26C21.5967 21.9173 20.8033 22.8693 20.214 24.116C19.6247 25.3627 19.33 26.8813 19.33 28.672C19.33 30.5307 19.6247 32.0947 20.214 33.364C20.8033 34.6333 21.5967 35.5853 22.594 36.22C23.5913 36.8547 24.7133 37.172 25.96 37.172C26.708 37.172 27.4447 37.0247 28.17 36.73C28.918 36.4127 29.598 35.9933 30.21 35.472C30.822 34.928 31.2867 34.3047 31.604 33.602L32.828 34.826ZM41.4404 15.48H43.1404L47.4924 30.61C47.6964 31.29 47.8664 31.97 48.0024 32.65C48.161 33.33 48.297 33.9307 48.4104 34.452C48.5237 34.9507 48.5917 35.302 48.6144 35.506H48.7504C48.7957 35.302 48.8637 34.9393 48.9544 34.418C49.0677 33.8967 49.1924 33.296 49.3284 32.616C49.487 31.936 49.657 31.2673 49.8384 30.61L54.1224 15.48H55.8224L49.6684 37.138H47.6964L41.4404 15.48ZM36.3744 15.48H38.1084L45.7244 40.368H51.3004L58.9164 15.48H60.6504L52.5244 42H44.5004L36.3744 15.48ZM71.7123 29.318C71.3496 28.5473 70.9983 27.72 70.6583 26.836C70.341 25.9293 70.0576 25.068 69.8083 24.252C69.5816 23.4133 69.4003 22.722 69.2643 22.178H69.1623C69.4116 23.4927 69.6043 25.0113 69.7403 26.734C69.8763 28.434 69.9443 30.2587 69.9443 32.208V42H68.3123V20.342H69.2303L78.7843 40.368H83.8843V15.48H85.5163V42H77.7643L71.7123 29.318ZM70.5223 17.112H65.6943V42H64.0623V15.48H71.5423L77.6283 28.026C78.0816 28.9553 78.501 29.9073 78.8863 30.882C79.2716 31.834 79.589 32.6953 79.8383 33.466C80.1103 34.214 80.269 34.7467 80.3143 35.064H80.4843C80.1896 33.3867 79.9743 31.7433 79.8383 30.134C79.7023 28.5247 79.6343 27.0627 79.6343 25.748V15.48H81.2663V36.9H80.1443L70.5223 17.112ZM99.1381 29.318C98.7754 28.5473 98.4241 27.72 98.0841 26.836C97.7668 25.9293 97.4834 25.068 97.2341 24.252C97.0074 23.4133 96.8261 22.722 96.6901 22.178H96.5881C96.8374 23.4927 97.0301 25.0113 97.1661 26.734C97.3021 28.434 97.3701 30.2587 97.3701 32.208V42H95.7381V20.342H96.6561L106.21 40.368H111.31V15.48H112.942V42H105.19L99.1381 29.318ZM97.9481 17.112H93.1201V42H91.4881V15.48H98.9681L105.054 28.026C105.507 28.9553 105.927 29.9073 106.312 30.882C106.697 31.834 107.015 32.6953 107.264 33.466C107.536 34.214 107.695 34.7467 107.74 35.064H107.91C107.615 33.3867 107.4 31.7433 107.264 30.134C107.128 28.5247 107.06 27.0627 107.06 25.748V15.48H108.692V36.9H107.57L97.9481 17.112ZM118.914 15.48H137.274V17.112H120.546V40.368H137.954V42H118.914V15.48ZM123.47 19.016H137.274V20.648H125.102V25.884H135.54V27.516H123.47V19.016ZM123.47 29.318H135.54V30.95H125.102V36.832H137.954V38.464H123.47V29.318ZM163.707 37.376C162.869 39.008 161.565 40.3 159.797 41.252C158.052 42.204 156.046 42.68 153.779 42.68C151.241 42.68 149.008 42.1133 147.081 40.98C145.177 39.824 143.681 38.2033 142.593 36.118C141.528 34.01 140.995 31.528 140.995 28.672C140.995 25.8613 141.528 23.4133 142.593 21.328C143.681 19.2427 145.177 17.6333 147.081 16.5C149.008 15.344 151.229 14.766 153.745 14.766C155.355 14.766 156.817 14.9927 158.131 15.446C159.446 15.8993 160.568 16.5227 161.497 17.316C162.427 18.1093 163.107 19.016 163.537 20.036L162.415 21.056C161.441 19.3107 160.205 18.098 158.709 17.418C157.213 16.738 155.559 16.398 153.745 16.398C151.524 16.398 149.575 16.908 147.897 17.928C146.243 18.948 144.951 20.376 144.021 22.212C143.092 24.048 142.627 26.2013 142.627 28.672C142.627 31.188 143.092 33.3753 144.021 35.234C144.951 37.0927 146.254 38.532 147.931 39.552C149.609 40.572 151.558 41.082 153.779 41.082C155.547 41.082 157.168 40.7307 158.641 40.028C160.137 39.3253 161.475 38.0787 162.653 36.288L163.707 37.376ZM161.191 34.826C160.307 36.186 159.253 37.1947 158.029 37.852C156.805 38.4867 155.57 38.804 154.323 38.804C152.827 38.804 151.445 38.43 150.175 37.682C148.929 36.934 147.931 35.812 147.183 34.316C146.435 32.82 146.061 30.9387 146.061 28.672C146.061 26.496 146.435 24.66 147.183 23.164C147.931 21.668 148.929 20.546 150.175 19.798C151.422 19.0273 152.793 18.642 154.289 18.642C155.491 18.642 156.692 18.9593 157.893 19.594C159.095 20.206 160.081 21.1807 160.851 22.518L159.661 23.606C159.389 22.994 158.97 22.4387 158.403 21.94C157.859 21.4187 157.225 21.0107 156.499 20.716C155.774 20.4213 155.037 20.274 154.289 20.274C153.065 20.274 151.955 20.6027 150.957 21.26C149.96 21.9173 149.167 22.8693 148.577 24.116C147.988 25.3627 147.693 26.8813 147.693 28.672C147.693 30.5307 147.988 32.0947 148.577 33.364C149.167 34.6333 149.96 35.5853 150.957 36.22C151.955 36.8547 153.077 37.172 154.323 37.172C155.071 37.172 155.808 37.0247 156.533 36.73C157.281 36.4127 157.961 35.9933 158.573 35.472C159.185 34.928 159.65 34.3047 159.967 33.602L161.191 34.826ZM164.976 15.48H185.41V17.112H164.976V15.48ZM176.706 19.016H185.41V20.648H178.338V42H176.706V19.016ZM172.014 20.648H164.976V19.016H173.646V42H172.014V20.648Z"
                        fill="white"
                    />
                </svg>
                <p className="flex items-center justify-center gap-1 text-sm text-center text-white">
                    Created by
                    <a
                        href="https://mathew-luong.github.io/"
                        className="text-pinkText"
                    >
                        {" "}
                        Mathew
                    </a>
                </p>
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
                {isLoadingUser ? (
                    <></>
                ) : user ? (
                    <button
                        onClick={() => handleSignOut()}
                        className="flex items-center justify-center p-2 font-semibold text-white transition-colors duration-300 ease-in-out border border-white rounded-md hover:bg-white hover:text-black active:bg-gray active:border-gray"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        href="/login"
                        className="flex items-center justify-center p-2 font-semibold text-white transition-colors duration-300 ease-in-out border border-white rounded-md hover:bg-white hover:text-black active:bg-gray active:border-gray"
                    >
                        Login
                    </Link>
                )}

                <div className="flex justify-center gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        aria-label="facebook"
                    >
                        <FaFacebookSquare
                            size="24"
                            className="text-[#DADADA] ease-in duration-200 hover:text-white"
                        />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        aria-label="twitter"
                    >
                        <FaTwitter
                            size="24"
                            className="text-[#DADADA] hover:text-white ease-in duration-200"
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        aria-label="instagram"
                    >
                        <AiFillInstagram
                            size="24"
                            className="text-[#DADADA] hover:text-white ease-in duration-200"
                        />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        aria-label="youtube"
                    >
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
