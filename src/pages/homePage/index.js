"use client"
import HeroBanner from "@/pages/homePage/heroBanner";
import About from "./about";
import OurGames from "./ourGame";
import Join from "./join";

export default function HomePage() {
    return (
        <main>
            <HeroBanner />
            <About />
            <OurGames />
            <Join />
        </main>
    )
}
