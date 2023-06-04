import Content from "./components/Content/content";
import Featured from "./components/Featured/featured";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Nav/navbar";
import Reviews from "./components/Reviews/reviews";

export default function Home() {
    return (
        <main className="w-full h-full">
            <Navbar />
            <Intro />
            <Content />
            <Featured />
            <Reviews />
            <Footer />
        </main>
    );
}
