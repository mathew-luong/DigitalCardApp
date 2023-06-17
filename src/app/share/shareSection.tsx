import Link from "next/link";
import { QrCode } from "./qrcode";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

export function ShareSection() {
    const id = "bIXqOwMDFWa37ndTqp6TGww9jm42";

    const handleSendToEmail = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("SEND TO EMAIL");
        if (true) {
            toast("Email sent.", {
                icon: "✉️",
                style: {
                    borderRadius: "24px",
                    background: "#333",
                    color: "#fff",
                },
            });
        } else {
            toast.error("Failed to send email.", {
                style: {
                    borderRadius: "24px",
                    background: "#333",
                    color: "#fff",
                },
            });
        }
    };

    const copyToClipboard = (text: string, result: boolean) => {
        console.log("COPIED");
        if (result) {
            toast("Copied to clipboard.", {
                icon: "📎",
                style: {
                    borderRadius: "24px",
                    background: "#333",
                    color: "#fff",
                },
            });
        } else {
            toast.error("Failed to copy to clipboard.", {
                style: {
                    borderRadius: "24px",
                    background: "#333",
                    color: "#fff",
                },
            });
        }
    };

    return (
        <div className="mx-auto max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] rounded-xl p-6 mt-8 flex gap-6 flex-col bg-white relative shadow-xl">
            {/* <div className="mx-auto max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] rounded-xl p-6 mt-8 flex gap-6 flex-col bg-white relative shadow-all"> */}
            <Toaster />
            <Link
                href={`/${id}`}
                className="absolute px-4 py-2 text-sm font-bold text-black transition-colors duration-300 ease-in-out bg-white border-2 rounded-md border-pinkText hover:drop-shadow-xl top-6 right-6 hover:bg-pinkText hover:text-white"
            >
                Preview card
            </Link>
            <div className="flex flex-col gap-4 my-2">
                <h1 className="text-xl font-bold">Share your card</h1>
                <p className="text-grayText max-w-[25ch] sm:max-w-[30ch]">
                    Start connecting with others by sharing your card now.
                </p>
            </div>
            <div className="flex flex-col gap-2 box">
                <QrCode url={"cvnnect.com/" + id} />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-[#252525]">Email</h2>
                <form
                    className="flex w-full gap-2"
                    onSubmit={handleSendToEmail}
                >
                    <input
                        className="px-4 py-2 rounded-md border-[1px] border-gray w-full"
                        type="email"
                        placeholder="recipient@mail.com"
                    ></input>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm font-bold text-white bg-black rounded-md hover:drop-shadow-xl shrink-0"
                    >
                        Send card
                    </button>
                </form>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-[#252525]">Share read-only link</h2>
                <div className="relative w-full overflow-x-hidden text-sm rounded-md bg-grayBg">
                    <div className="max-w-[63%] sm:max-w-[70%] overflow-x-auto text-grayText px-2 py-[14px] whitespace-nowrap xl:max-w-[72.5%] 2xl:max-w-[80%]">
                        cvvnect.com/{id}
                    </div>
                    <CopyToClipboard
                        text={"cvnnect.com/" + id}
                        onCopy={copyToClipboard}
                    >
                        <button className="absolute px-4 py-[6px] text-sm bg-white rounded-md right-2 top-2 bottom-2 active:bg-slate-50 hover:drop-shadow-xl text-[#252525]">
                            Copy link
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
}
