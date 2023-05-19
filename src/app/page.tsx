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
            <Featured />
            <Reviews />
            <Details />
            <Footer />
        </main>
    );
}
