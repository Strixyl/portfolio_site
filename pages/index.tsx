// src/pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-lg font-bold">Juster</h1>
        <ul className="flex space-x-5 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#works">Works</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Hi, <br />
            I'm <span className="text-blue-400">Juster</span><br />
            <span className="text-2xl font-semibold">Computer Science Student</span>
          </h2>
          <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
            Contact
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-32 h-32 relative overflow-hidden">
         <Image
            src="/images/elgatopic.png"
            alt="Profile"
            fill
            className="object-contain"
            />
          </div>
        </div>
      </main>

      {/* Footer Icons */}
      <footer className="flex justify-center space-x-6 py-4 text-gray-400 text-sm">
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</Link>
        <Link href="https://github.com/Strixyl" target="_blank" rel="noopener noreferrer">GitHub</Link>
      </footer>
    </div>
  );
}
