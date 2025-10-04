import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductUnit() {
    return (
        <Link href="/product/1">
            <div className="bg-white/5 p-4 rounded-md">
                <Image src="/images/mug_black_accent.png" alt="Product Image" width={500} height={500} />
                <h2>Product Name</h2>
                <p>Product Description</p>
            </div>
        </Link>
    )
}