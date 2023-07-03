"use client";
import BackBtn from "../components/Buttons/backBtn";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { AnimLogo } from "../components/Animations/animLogo";
import pic from "../../../public/images/pictures/signup.svg";
import Image from "next/image";
import Redirect from "../components/redirect";

export default function SignupComponent() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const {
        handleSignInWithGoogle,
        handleNewEmailUser,
        user,
        isLoadingUser,
        handleRedirect,
    } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            router.push("/");
        }
        const checkAuth = async () => {
            const result = await handleRedirect();
            if (result) {
                router.push("/");
            }
        };
        checkAuth();
    }, [user]);

    // Handle signup with email and password
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        handleNewEmailUser(data.email, data.password)
            .then((userCredential: any) => {
                // Signed in
                let user = userCredential.user;
                router.push("/");
            })
            .catch((error: any) => {
                if (error.code == "auth/email-already-in-use") {
                    setError("password", {
                        type: "custom",
                        message: "Email already in use.",
                    });
                } else {
                    setError("password", {
                        type: "custom",
                        message: "Error! " + error.code,
                    });
                }
            });
    };

    const handleGoogleSignup = () => {
        handleSignInWithGoogle();
    };

    return isLoadingUser ? (
        <Redirect />
    ) : user ? (
        <></>
    ) : (
        <div className="flex h-screen">
            <BackBtn styles="absolute hidden md:flex items-center bg-[#F0F0F0] p-2 top-6 left-6 ease-in duration-300 rounded-full ring-black/30 hover:ring-6 active:bg-[#D8D8D8]" />
            <section className="bg-white text-white hidden md:flex w-[50%] w-max-[33rem] flex-col h-full justify-center items-center p-16">
                <Image src={pic} alt="img" className="w-auto h-auto"></Image>
                <AnimLogo color="#ff5c87" />
                <div className="flex flex-wrap justify-center gap-6 mt-10 text-black">
                    <p>✔️ Easy to use</p>
                    <p>✔️ Beautiful designs</p>
                    <p>✔️ Shareable</p>
                </div>
            </section>
            <section className="flex items-center justify-center flex-grow min-h-full gap-6 text-center bg-[#F9F7FF]">
                <div className="flex flex-col gap-6 w-[85%] md:w-[60%] xl:w-[50%] 2xl:w-[55%]">
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
                        className="border-[1px] rounded-md border-gray p-2 w-full align-middle hover:bg-[#EFEFEF] active:bg-gray disabled:opacity-70 bg-white"
                        onClick={handleGoogleSignup}
                        disabled={Boolean(user)}
                    >
                        <FcGoogle className="float-left" size="24" />

                        <span className="font-semibold">
                            Signup with Google
                        </span>
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
                        <label htmlFor="email" className="font-bold">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                            })}
                        ></input>
                        {/* errors will return when field validation fails  */}
                        {errors.email && (
                            <span className="text-rose-500">
                                Email must be of the form: name@mail.com
                            </span>
                        )}
                        <label htmlFor="password" className="mt-2 font-bold">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                            minLength={5}
                            {...register("password", { required: true })}
                        ></input>
                        {errors.password && (
                            <p className="text-rose-500">
                                {errors.password.message?.toString()}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 mt-6 font-semibold text-white bg-black rounded-md hover:drop-shadow-xl disabled:opacity-70"
                            aria-label="Submit"
                            disabled={Boolean(user)}
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
