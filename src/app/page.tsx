import Content from "./components/Content/content";
import Details from "./components/Details/details";
import Featured from "./components/Featured/featured";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Nav/navbar";
import Reviews from "./components/Reviews/reviews";

export default function Home() {
    return (
        <main className="h-screen">
            <Navbar />
            <Intro />
            <Content />
            <Featured />
            <Reviews />
            {/* <Details /> */}
            <Footer />
        </main>
    );
}
