"use client";
import BackBtn from "../components/backBtn";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/pictures/Logo.svg";
import Image from "next/image";
import SlideUp from "../components/Animations/animSlideUp";
import { AuthContext } from "../context/authContext";
import { useContext, useEffect } from "react";

export default function Login() {
    const router = useRouter();
    const {
        handleSignInWithGoogle,
        handleLoginWithEmail,
        handleRedirect,
        handleGuestLogin,
        user,
        isLoadingUser,
    } = useContext(AuthContext);

    // useEffect(() => {
    //     console.log("LOGIN PAGE USER LOGGED IN");
    //     if (user) {
    //         router.push("/");
    //     }
    // }, [user, isLoadingUser]);

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Handle login with email and password
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        handleLoginWithEmail(data.email, data.password)
            .then((userCredential: any) => {
                // Signed in
                let user = userCredential.user;
                router.push("/");
            })
            .catch((error: any) => {
                setError("password", {
                    type: "custom",
                    message: "Invalid credentials.",
                });
            });
    };

    const handleGoogleLogin = async () => {
        try {
            await handleSignInWithGoogle();
        } catch (e) {
            console.error("Login error", e);
        }
    };

    // Guest login
    const guestLogin = async () => {
        handleGuestLogin()
            .then(() => {
                // Signed in..
                router.push("/");
            })
            .catch((error: any) => {
                console.error("Guest login", error.code);
            });
    };

    // handleRedirect();

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
                    <h2 className="text-center subHeader">Welcome Back.</h2>
                </SlideUp>
            </section>
            <section className="flex items-center justify-center flex-grow min-h-full gap-6 text-center bg-white">
                <div className="flex flex-col gap-6 w-[85%] md:w-[60%] xl:w-[45%]">
                    <div>
                        <h1 className="mb-4 header2">
                            Login
                            <span className="text-pinkText ml-[2px]">.</span>
                        </h1>
                        <h2 className="subHeader2">Login to your account</h2>
                    </div>
                    <button
                        className="border-[1px] rounded-md border-gray p-2 w-full align-middle hover:bg-[#EFEFEF] active:bg-gray disabled:opacity-70"
                        onClick={handleGoogleLogin}
                        disabled={Boolean(user)}
                    >
                        <FcGoogle className="float-left" size="24" />

                        <span className="font-bold">Continue with Google</span>
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
                            placeholder="Email"
                            type="text"
                            className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                            required
                            {...register("email", {
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
                            placeholder="Password"
                            type="password"
                            className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                            minLength={5}
                            required
                            {...register("password")}
                        ></input>
                        {errors.password && (
                            <p className="text-rose-500">
                                {errors.password.message?.toString()}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 mt-6 font-bold text-white bg-black rounded-md hover:drop-shadow-xl disabled:opacity-70"
                            aria-label="Submit"
                            disabled={Boolean(user)}
                        >
                            Login
                        </button>
                    </form>
                    <p>
                        Don&#x27;t have an account yet?{" "}
                        <Link
                            className="font-bold text-pinkText"
                            href="/signup"
                        >
                            Signup
                        </Link>
                    </p>
                    <p>
                        <button
                            className="font-bold text-pinkText"
                            onClick={guestLogin}
                        >
                            Login
                        </button>{" "}
                        with guest account.
                    </p>
                </div>
            </section>
        </div>
    );
}
