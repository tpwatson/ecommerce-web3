import React from "react";
import HeroUnit from "./HeroUnit";

export default function HeroSection() {

    return (
        <section className="min-h-[50vh] max-h-[50vh]">
            {/* Shows a carousel of the top 3 products and showcase top categories*/}
            <ul className="flex flex-row gap-4 overflow-x-auto">
                <HeroUnit />
                <HeroUnit />
                <HeroUnit />
                <HeroUnit />
            </ul>
        </section>
    )
}