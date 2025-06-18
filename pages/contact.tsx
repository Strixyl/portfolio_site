import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans p-8 relative overflow-hidden">
      {/* Blurred background shape */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full opacity-30 blur-3xl top-[-100px] right-[-100px] z-0"></div>

      {/* Navbar (optional re-use or layout) */}
      <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-700 z-10 relative">
        <ul className="flex space-x-6 text-sm font-bold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto mt-20 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
        <p className="text-gray-300 text-center mb-10">
          Whether it’s collaboration, questions, or just saying hi feel free to reach out!
        </p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows={5}
                placeholder="Say something..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 transition px-4 py-2 rounded text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
