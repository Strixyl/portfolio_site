import Link from 'next/link';
import React from 'react';
import { SiR, SiPython, SiNextdotjs } from 'react-icons/si';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiFlutter, SiCisco } from "react-icons/si";


export default function Skills() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white font-sans relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg--700 rounded-full opacity-30 blur-3xl top-[-100px] left-[-100px] z-0"></div>

            <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-700 z-10 relative">
                <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-extrabold">
                        <span className="bg-gradient-to-r from-slate-400 via-white-400 to-pink-300 bg-clip-text text-transparent">
                            Juster
                        </span>
                    </h1>
                </div>
                <ul className="flex space-x-6 text-sm font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/works">Works</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <main className="flex flex-col items-center justify-center px-4 py-16 md:py-24 z-10 relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center">
                        <SiR size={64} className="text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">R (Data Science)</h3>
                        <p className="text-gray-400 text-center">Regression models, vectorized operations, and statistical analysis using R.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center">
                        <SiNextdotjs size={64} className="text-white mb-4" />
                        <h3 className="text-xl font-semibold mb-2">CSS & Next.js</h3>
                        <p className="text-gray-400 text-center">Minor web design using modern CSS practices and React-based Next.js framework.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center">
                        <SiPython size={64} className="text-yellow-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Python</h3>
                        <p className="text-gray-400 text-center">
                            Visual graphics computing with matplotlib and Turtle, plus minor game development using Pygame.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center">
                        <SiFlutter size={64} className="text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Flutter</h3>
                        <p className="text-gray-400 text-center">
                            Cross-platform mobile application development with expressive UIs and fast performance using Dart.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center">
                        <SiCisco size={64} className="text-blue-300 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Cisco IT Essentials</h3>
                        <p className="text-gray-400 text-center">
                            Completed IT Essentials 8: focused on PC hardware, troubleshooting, maintenance, and system assembly.
                        </p>
                    </div>
                </div>
            </main>
            <footer className="flex justify-center space-x-6 py-10 mt-8 text-gray-400 font-bold text-sm relative z-10">
                <Link href="https://linkedin.com" target="_blank" className="flex items-center space-x-2">
                    <FaLinkedin size={18} />
                    <span>LinkedIn</span>
                </Link>
                <Link href="https://github.com/Strixyl" target="_blank" className="flex items-center space-x-2">
                    <FaGithub size={18} />
                    <span> GitHub </span>
                </Link>
                <Link href="mailto:uretajuster@gmail.com" target="_blank" className="flex items-center space-x-2">
                    <SiGmail size={18} />
                    <span> G-Mail </span>
                </Link>
            </footer>
        </div>
    )
}



