"use client";

import { usePathname } from "next/navigation";
import Card from "../components/CardTemplates/card";
import { getCardInfo } from "../lib/cardFunctions";
import { InfoType } from "../create/clientCreate";
import { Train_One } from "next/font/google";
import Link from "next/link";
import NotFound from "../not-found";

const getCardData = async (id: string) => {
    const data: InfoType | undefined = await getCardInfo(id);
    if (!data) {
        return undefined;
    }
    return data;
};

// logo font
const font = Train_One({ weight: "400", subsets: ["latin"] });

export default async function Page() {
    const path = usePathname();
    const id = path.substring(1);

    const info = await getCardData(id);

    if (!info) {
        return <NotFound />;
    }

    return (
        <div className="flex items-center justify-center h-[100vh] w-[100%] gap-6 flex-col relative">
            <Card
                props={info}
                styles="w-[90%] sm:w-[60%] md:w-[55%] lg:w-[40%] xl:w-[35%] max-w-[680px]"
            />
            <Link href="/" className="absolute bottom-6">
                <span
                    className={
                        font.className + " active:text-pinkText colorText"
                    }
                >
                    CVNNECT
                </span>
            </Link>
        </div>
    );
}
