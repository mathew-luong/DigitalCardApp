import { AnimLogo } from "../../Animations/animLogo";

export function CardInfo() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2">
            {/* <section className="grid grid-cols-2 px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-72 3xl:px-[25%]"> */}
            <div className="sm:sticky sm:top-[90px] flex items-center justify-center w-full bg-black h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)]">
                <AnimLogo />
            </div>
            {/* bg-position-center and bg-size cover */}
            <div className="">
                <div className="w-full h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] bg-red-600">
                    IMAGE 1
                </div>
                <div className="w-full h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] bg-sky-500">
                    IMAGE 2
                </div>
                <div className="w-full h-[calc(100vh-141px)] sm:h-[calc(100vh-90px)] bg-purple-700">
                    IMAGE 2
                </div>
            </div>
        </section>
    );
}
