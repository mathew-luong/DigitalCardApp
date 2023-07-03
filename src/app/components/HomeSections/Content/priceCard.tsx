import Link from "next/link";

type PropsType = {
    name: string;
    price: string;
    attr1: string;
    attr2: string;
    btn: string;
    message: string;
    className?: string;
};

export function PriceCard({
    name,
    price,
    attr1,
    attr2,
    btn,
    message,
    className,
}: PropsType) {
    return (
        <div className={"flex flex-col gap-4 rounded-xl " + className}>
            <div className="rounded-xl bg-[#F8F9FD] p-10 hover:shadow-lg flex flex-col items-start">
                <h1 className="font-semibold text-pinkText bg-pinkText px-3 py-[4px] bg-opacity-30 rounded-2xl text-xs mb-4 uppercase">
                    {name}
                </h1>
                <h2 className="mb-6 header">
                    ${price}
                    <span className="text-grayText subHeader">/mo</span>
                </h2>
                <div className="flex flex-col gap-2 mb-8">
                    <p className="inline-flex items-center gap-3">
                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.1221 1.44067L6.12207 12.4407L1.12207 7.44067"
                                stroke="#FF5C87"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {attr1}
                    </p>
                    <p className="inline-flex items-center gap-3">
                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.1221 1.44067L6.12207 12.4407L1.12207 7.44067"
                                stroke="#FF5C87"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {attr2}
                    </p>
                </div>
                {name === "Starter" ? (
                    <Link
                        href="/create"
                        className="w-full px-4 py-2 font-semibold text-center text-white bg-black rounded-md hover:drop-shadow-lg"
                    >
                        {btn}
                    </Link>
                ) : (
                    <button
                        className="w-full px-4 py-2 font-semibold text-center text-white bg-black rounded-md disabled:opacity-40"
                        disabled
                    >
                        {btn}
                    </button>
                )}
            </div>
            <p className="text-grayText">{message}</p>
        </div>
    );
}
