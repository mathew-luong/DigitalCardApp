"use client";
import BackBtn from "../components/backBtn";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { AnimLogo } from "../components/Animations/animLogo";

export default function Signup() {
    const router = useRouter();
    const { handleSignInWithGoogle, handleNewEmailUser, user, isLoadingUser } =
        useContext(AuthContext);

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
            confirmPassword: "",
        },
    });

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

    return (
        <div className="flex h-screen">
            <BackBtn />
            <section className="bg-gradientBg text-white hidden md:flex w-1/3 w-max-[33rem] flex-col h-full justify-center items-center p-16">
                <AnimLogo />
                <h2 className="mt-2 text-center subHeader">Get Started.</h2>
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
                        className="border-[1px] rounded-md border-gray p-2 w-full align-middle hover:bg-[#EFEFEF] active:bg-gray disabled:opacity-70"
                        onClick={handleGoogleSignup}
                        disabled={Boolean(user)}
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
                        <label htmlFor="email" className="font-bold">
                            Email
                        </label>
                        <input
                            id="email"
                            placeholder="Email"
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
                            placeholder="Password"
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
                            className="inline-flex justify-center px-4 py-2 mt-6 font-bold text-white bg-black rounded-md hover:drop-shadow-xl disabled:opacity-70"
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
