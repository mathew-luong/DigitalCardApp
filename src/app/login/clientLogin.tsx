"use client";
import BackBtn from "../components/Buttons/backBtn";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/authContext";
import { useContext, useEffect } from "react";
import { AnimLogo } from "../components/Animations/animLogo";
import Redirect from "../components/redirect";

export default function LoginComponent() {
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
        },
    });

    const {
        handleSignInWithGoogle,
        handleLoginWithEmail,
        handleRedirect,
        handleGuestLogin,
        user,
        isLoadingUser,
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
        await handleSignInWithGoogle();
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

    return isLoadingUser ? (
        <Redirect />
    ) : user ? (
        <></>
    ) : (
        <div className="flex h-screen">
            <BackBtn styles="absolute hidden md:flex items-center bg-white p-2 top-6 left-6 ease-in duration-300 rounded-full ring-white/50 hover:ring-6 active:bg-[#F0F0F0]" />
            <section className="gradientAnim text-white hidden md:flex w-1/3 w-max-[33rem] flex-col h-full justify-center items-center p-16">
                <AnimLogo />
                <h2 className="mt-4 text-center subHeader">Welcome Back.</h2>
            </section>
            <section className="flex items-center justify-center flex-grow min-h-full gap-6 text-center bg-white">
                <div className="flex flex-col gap-6 w-[85%] md:w-[55%] xl:w-[40%] 2xl:w-[45%]">
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

                        <span className="font-semibold">
                            Continue with Google
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
                            className="inline-flex justify-center px-4 py-2 mt-6 font-semibold text-white bg-black rounded-md hover:drop-shadow-xl disabled:opacity-70"
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
