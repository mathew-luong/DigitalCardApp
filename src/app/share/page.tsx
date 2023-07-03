import AnimExpand from "../components/Animations/animExpand";
import Navbar from "../components/Nav/navbar";
import { ShareSection } from "./shareSection";

export const metadata = {
    title: "Share",
};

export default function Share() {
    return (
        <div className="w-full h-full">
            <Navbar />
            <section className="pt-40 pb-12 sm:pt-28">
                <AnimExpand>
                    <ShareSection />
                </AnimExpand>
            </section>
        </div>
    );
}
