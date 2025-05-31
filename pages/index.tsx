// src/pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Juster</h1>
        <ul className="flex space-x-5 text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            👋 Hi, I'm <span className="text-blue-400">Juster</span><br />
            <span className="text-3xl font-semibold text-gray-300">
              A Computer Science Student
            </span>
          </h2>
          <button
            className="mt-6 px-6 py-3 text-lg bg-blue-600 rounded-lg shadow hover:bg-blue-500 transition-all duration-200"
          >
            <Link href="#contact">Contact Me</Link>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-2 border-blue-500">
            <Image
              src="/images/elgatopic.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>

      {/* Footer Icons */}
      <footer className="flex justify-center space-x-6 py-6 text-gray-400">
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="w-6 h-6 hover:text-white transition" />
        </Link>
        <Link href="https://github.com/Strixyl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="w-6 h-6 hover:text-white transition" />
        </Link>
      </footer>
    </div>
  );
}

