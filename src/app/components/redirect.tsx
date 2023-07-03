// Display loading animation
export default function Redirect() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-[100vh] w-[100%]">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-pinkText border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <h1 className="text-lg text-black">Redirecting</h1>
        </div>
    );
}
