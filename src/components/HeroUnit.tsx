import React from "react";
import Image from "next/image";

export default function HeroUnit() {
    return (
        <li className="min-w-[80vw] max-w-[80vw] min-h-[50vh] max-h-[50vh] mt-4 ml-2 mr-2 bg-white/5 flex flex-col items-center justify-center">
            <Image src="/images/mug_black_accent.png" priority={true} alt="Product Image" width={500} height={500}
                className="w-auto h-1/2 relative z-0"
            />
            <div className="relative z-10">
                <h2 className="text-white text-2xl font-bold">Coffee Mug</h2>
                <p className="text-white text-sm">A coffee mug with a pump logo on it.</p>
            </div>
            <div className="relative z-10">
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-md">Buy Now</button>
            </div>
            <div className="relative z-10">
                <p className="text-white text-sm">Price: $10.00</p>
            </div>
        </li>
    )
}