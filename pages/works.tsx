import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBeer } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full opacity-30 blur-3xl top-[-100px] left-[-100px] z-0"></div>

            <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-700 z-10 relative">
                <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-extrabold">
                        <span className="bg-gradient-to-r from-purple-400 via-white-400 to-pink-300 bg-clip-text text-transparent">
                            Juster
                        </span>
                    </h1>
                </div>
                <ul className="flex space-x-6 text-sm font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/works">Works</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
            <main className="px-8 py-16 md:py-24">
                <h2 className="text-4xl font-bold mb-12 text-center">My Works</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
                        <Image
                            src="/images/safedrive.png"
                            alt="Traffic Management System"
                            width={400}
                            height={200}
                            className="rounded mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold mb-2">Traffic Management System</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            A collaborative project with my groupmates for Web System and Technologies using HTML, CSS, and JavaScript to simulate real-time traffic light control logic.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                href="https://github.com/bananaNuggets75/traffic-management-system"
                                target="_blank"
                                className="inline-block"
                            >
                                <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-blue-200 font-semibold rounded-full transition shadow">
                                    View on GitHub
                                </button>
                            </Link>
                            <Link
                                href="https://traffic-management-system-cyan.vercel.app"
                                target="_blank"
                                className="inline-block"
                            >
                                <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-blue-200 font-semibold rounded-full transition shadow">
                                    View on Vercel
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="flex justify-center space-x-6 py-6 text-gray-400">
                <Link href="https://linkedin.com" target="_blank">in</Link>
                <Link href="https://github.com/Strixyl" target="_blank">GitHub</Link>
            </footer>
        </div>
    );
}
