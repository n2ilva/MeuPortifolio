"use client";

import HomeHeader from "./HomeHeader";
import HomeExperiencias from "./HomeExperiencias";
import HomeFooter from "./HomeFooter";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            <HomeHeader />
            <HomeExperiencias />
            <HomeFooter />
        </div>
    );
}
