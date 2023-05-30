"use client";

import { usePathname } from "next/navigation";
import QRCode from "react-qr-code";

export function QrCode() {
    const pathname = usePathname();

    const url = "http://192.168.1.81:3000/" + pathname;

    return (
        <div className="max-w-[90%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[40%] xl:max-w-[35%] mx-auto bg-black text-white rounded-xl grid place-items-center p-4">
            <h1 className="mb-4 font-bold">QR Code</h1>
            <QRCode
                className="h-auto max-w-[65%] md:max-w-[50%] xl:max-w-[40%]"
                value={url}
            />
        </div>
    );
}
