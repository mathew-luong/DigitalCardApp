import QRCode from "react-qr-code";

export function QrCode({ url }: { url: string }) {
    return (
        <div className="grid w-full mx-auto text-white place-items-center">
            <QRCode
                className="h-auto max-w-[65%] md:max-w-[50%] xl:max-w-[40%]"
                value={url}
            />
        </div>
    );
}
