"use client";

import { usePathname } from "next/navigation";
import Card from "../components/CardTemplates/card";

const info = {
    templateName: "standard",
    firstName: "Mathew",
    lastName: "L",
    title: "CEO",
    company: "MovieFinder",
    email: "mathewl@gmail.com",
    phone: "1234567890",
    website: "qwer",
    linkedin: "https://www.linkedin.com/in/mathew-luong/",
    twitter: "qwer",
    instagram: "qwer",
    facebook: "qwer",
};

export default function Page({ params }: { params: string }) {
    const path = usePathname();

    console.log("THIS IS THE PATH:", path);

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Card
                props={info}
                styles="w-[90%] sm:w-[60%] md:w-[55%] lg:w-[40%] xl:w-[35%] max-w-[680px]"
            />
        </div>
    );
}
