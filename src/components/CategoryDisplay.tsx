import React from "react";
import Link from "next/link";

export default function CategoryDisplay() {

    return (
        <section className="min-h-[50vh] max-h-[50vh] mt-8 mb-8">
            <h2>Browse by Category</h2>
            <div className="grid grid-cols-5 gap-4">
                <Link href="/category/mugs">
                    <div className="bg-white/5 p-4 rounded-md">
                        Mugs
                    </div>
                </Link>
                <Link href="/category/hats">
                    <div className="bg-white/5 p-4 rounded-md">
                        Hats
                    </div>
                </Link>
                <Link href="/category/tshirts">
                    <div className="bg-white/5 p-4 rounded-md">
                        T-shirts
                    </div>
                </Link>
                <Link href="/category/hoodies">
                    <div className="bg-white/5 p-4 rounded-md">
                        Hoodies
                    </div>
                </Link>
                
            </div>
        </section>
    )
}