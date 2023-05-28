import BackgroundBlur from "../components/backgroundBlur";
import Navbar from "../components/Nav/navbar";
import { CardSection } from "./cardSection";

export default function Card() {
    return (
        <div className="w-full h-full">
            <Navbar />
            <BackgroundBlur direction="right" />
            <BackgroundBlur direction="left" />
            <CardSection />
        </div>
    );
}
