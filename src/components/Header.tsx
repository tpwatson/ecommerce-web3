import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() {

    // logo, storename, empty space, wallet/stripe, cart icon
    return (
        <header>
            <div>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </Link>
                <h1>PumpStuff.Fun</h1>
                <div></div>

                <Link href="/cart">
                    <Image src="/cart.png" alt="cart" width={100} height={100} />
                </Link>
            </div>
        </header>
    )
}