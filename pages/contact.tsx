import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans p-4 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-700 z-10 relative mb-8">
        <ul className="flex space-x-6 text-sm font-bold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Contact Section */}
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-gray-900/80 rounded-2xl shadow-xl p-6">
          <h1 className="text-2xl font-bold mb-2 text-center">Contact Me</h1>
          <p className="text-gray-400 text-sm text-center mb-6">
            Let's connect! Fill out the form and I'll get at ya'.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
              placeholder="Your Name"
            />
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
              placeholder="Email"
            />
            <textarea
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm resize-none"
              rows={4}
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-purple-600 hover:text-white transition px-4 py-2 rounded-lg font-semibold text-sm shadow"
            >
              Send me a message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}