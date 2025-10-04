"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductPage() {

    const id = useParams().id as string;

    return (
        <div className="flex flex-row min-h-[90vh] max-h-[90vh] pt-8">

            {/* left side is product images */}
            <div className="w-3/4">
                <div className="bg-white/5 p-4 rounded-md flex flex-col items-center justify-center mx-8">
                    <Image src="/images/mug_black_accent.png" alt="Product Image" width={500} height={500} />
                </div>
            </div>

            {/* right side is product details and add to cart button */}
            <div className="w-1/4 flex flex-col mx-8">
                <div className="bg-white/5 p-4 rounded-md">
                    <h2>Id: {id}</h2>
                    <p>Price: $10.00</p>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-md cursor-pointer">Add to Cart</button>
                </div>
                <div className="bg-white/5 p-4 rounded-md">
                    <p>Get description from database</p>
                </div>
                <div className="bg-white/5 p-4 rounded-md">
                    <h4 className="font-bold">Return Policy</h4>
                    <p className="text-sm">No returns or refunds.</p>
                </div>
            </div>
        </div>
    )
}
