import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Home() {
    return (
        // Common Navbar and Background
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full opacity-30 blur-3xl top-[-100px] left-[-100px] z-0"></div>

            <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-700 z-10 relative">
            
                <ul className="flex space-x-6 text-sm font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="/works">Works</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            {/* ...rest of your page content here... */}
        </div>
    )
}