// src/pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiR, SiPython, SiNextdotjs } from 'react-icons/si';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiFlutter } from "react-icons/si";

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
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-10 md:py-20 z-10 relative">
        <div className="md:w-[40%] w-full mb-10 md:mb-0 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Hi, I'm <span className="text-purple-400">Juster</span><br />
            <span className="text-xl md:text-3xl font-bold text-gray-300">
              A Computer Science student specializing in <span className="text-purple-300 font-bold">Data Science</span><br />
              — with a touch of <span className="text-purple-300 font-semibold">Web Design</span> creativity.
            </span>
          </h2>
          <Link href="/contact">
              <button className="mt-6 px-8 py-3 text-lg bg-white text-black hover:bg-purple-500 hover:text-white transition rounded-full font-semibold shadow-lg">
              Get in Touch!
            </button>
          </Link>
          <Link href="/works">
            <button className="mt-6 px-8 py-3 text-lg bg-purple-600 hover:bg-white hover:text-black transition rounded-full font-semibold shadow-lg">
              Browse Projects
            </button>
          </Link>
        </div>
        <div className="md:w-[40%] w-full flex justify-center items-center">
          <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full bg-[#7833ff] shadow-2xl overflow-hidden">
            <Image
              src="/images/elgatopic.png"
              alt="Profile"
              fill
              className="object-cover scale-110"
            />
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
  );
}

