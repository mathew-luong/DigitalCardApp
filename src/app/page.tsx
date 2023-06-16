import { CardInfo } from "./components/HomeSections/CardInfo/cardInfo";
import Content from "./components/HomeSections/Content/content";
import Featured from "./components/HomeSections/Featured/featured";
import Footer from "./components/Footer/footer";
import Intro from "./components/HomeSections/Intro/intro";
import Navbar from "./components/Nav/navbar";
import Reviews from "./components/HomeSections/Reviews/reviews";

export default function Home() {
    return (
        <main className="w-full h-full">
            <Navbar />
            <Intro />
            <Content />
            <Featured />
            <CardInfo />
            <Reviews />
            <Footer />
        </main>
    );
}
