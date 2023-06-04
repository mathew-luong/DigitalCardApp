"use client";
import BackBtn from "../components/backBtn";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/pictures/Logo.svg";
import Image from "next/image";
import SlideUp from "../components/Animations/animSlideUp";

export default function Signup() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("SUBMITTED");
        router.back();
    };

    const handleGoogleSignup = () => {
        router.back();
    };

    return (
        <div className="flex h-screen">
            <BackBtn />
            <section className="bg-gradientBg text-white hidden md:flex w-1/3 w-max-[33rem] flex-col h-full justify-center items-center p-16">
                <SlideUp>
                    <Image
                        src={logo}
                        alt="CVVNECT logo"
                        width={150}
                        className="justify-center mb-6"
                    ></Image>
                    <h2 className="text-center subHeader">Get Started.</h2>
                </SlideUp>
            </section>
            <section className="flex items-center justify-center flex-grow min-h-full gap-6 text-center bg-white">
                <div className="flex flex-col gap-6 w-[85%] md:w-[60%] xl:w-[45%]">
                    <div>
                        <h1 className="mb-4 header2">
                            Signup
                            <span className="text-pinkText ml-[2px]">.</span>
                        </h1>
                        <h2 className="subHeader2">
                            Create an account to get started
                        </h2>
                    </div>
                    <button
                        className="border-[1px] rounded-md border-gray p-2 w-full align-middle hover:bg-[#EFEFEF] active:bg-gray"
                        onClick={handleGoogleSignup}
                    >
                        <FcGoogle className="float-left" size="24" />

                        <span className="font-bold">Signup with Google</span>
                    </button>
                    {/* LINE BREAK */}
                    <div className="flex items-center">
                        <div className="flex-grow bg-gray h-[1px]"></div>
                        <div className="flex-grow-0 mx-5 text">or</div>
                        <div className="flex-grow bg-gray h-[1px]"></div>
                    </div>
                    <form
                        className="flex flex-col gap-2 text-start"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label htmlFor="username" className="font-bold">
                            Username
                        </label>
                        <input
                            id="username"
                            placeholder="Username"
                            type="text"
                            className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                            required
                            {...register("username", {
                                pattern: /^[A-Za-z0-9]*$/,
                            })}
                        ></input>
                        {/* errors will return when field validation fails  */}
                        {errors.username && (
                            <span className="text-rose-500">
                                Username must only contain letters and/or
                                numbers.
                            </span>
                        )}
                        <label htmlFor="password" className="mt-2 font-bold">
                            Password
                        </label>
                        <input
                            id="password"
                            placeholder="Password"
                            type="password"
                            className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                            minLength={5}
                            required
                            {...register("password")}
                        ></input>
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 mt-6 font-bold text-white bg-black rounded-md hover:drop-shadow-xl"
                            aria-label="Submit"
                        >
                            Signup
                        </button>
                    </form>
                    <p>
                        Already have an account?{" "}
                        <Link className="font-bold text-pinkText" href="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
