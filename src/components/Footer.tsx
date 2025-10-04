import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="sticky bottom-0 w-full bg-white/5">
            <ul className="flex flex-row justify-around items-center h-16">
                <li><Link href="https://x.com/i/communities/1973449730832343470">X Community</Link></li>
                <li><Link href="https://pump.fun/coin/G3vzCdw64AKDAcHM8MCrTF7m5HVdgDDzrdwKru8fpump">PumpFun Stream Link</Link></li>
                <li><Link href="https://t.me/+ma5_X5Z-LbVjM2Mx">Telegram Community</Link></li>
            </ul>
        </footer>

    )
}