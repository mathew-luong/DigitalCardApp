import "./globals.css";
import { Raleway } from "next/font/google";
import AuthProvider from "./context/authContext";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
    title: {
        template: "%s | CVNNECT",
        default: "CVNNECT",
    },
    description:
        "CVNNECT lets you create beautiful, customizable, shareable digital business cards.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={raleway.className}>
                <AuthProvider>{children} </AuthProvider>
            </body>
        </html>
    );
}
