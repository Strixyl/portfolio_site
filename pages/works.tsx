// src/pages/works.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Works() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-700">
        <h1 className="text-lg font-bold">Juster</h1>
        <ul className="flex space-x-6 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Works Section */}
      <main className="px-8 py-16 md:py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">My Works</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Collaborative Project: Traffic Management System */}
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
              A collaborative project with my groupmates using HTML, CSS, and JavaScript to simulate real-time traffic light control logic.
            </p>
            <Link
              href="https://github.com/bananaNuggets75/traffic-management-system"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </Link>
          </div>

          {/* You can add more works here... */}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center space-x-6 py-6 text-gray-400">
        <Link href="https://linkedin.com" target="_blank">in</Link>
        <Link href="https://github.com/Strixyl" target="_blank">GitHub</Link>
      </footer>
    </div>
  );
}
