import React, { useState, ChangeEvent, MouseEvent } from 'react';
import Link from 'next/link';
import { SiGmail, SiGithub, SiLinkedin,} from 'react-icons/si';
import { MdPhone, MdLocationOn } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white font-sans p-4 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-700 z-10 relative mb-8">
        <ul className="flex space-x-6 text-sm font-bold">
          <li><Link href="/" className="hover:text-slate-400 transition-colors">Home</Link></li>
          <li><Link href="/works" className="hover:text-slate-400 transition-colors">Works</Link></li>
          <li><Link href="/contact" className="text-slate-400">Contact</Link></li>
        </ul>
      </nav>
      {/* Contact Section */}
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50">
            <h1 className="text-3xl font-bold mb-3 text-center bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Contact Me
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Let's connect! Fill out the form and I'll get back to you.
            </p> 
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none"
                  rows={5}
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white transition-all px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-slate-500/25 flex items-center justify-center gap-2 group"
              >
                <IoSend className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:uretajuster@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <SiGmail className="text-slate-400 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white group-hover:text-slate-300 transition-colors">uretajuster@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <MdPhone className="text-slate-400 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white group-hover:text-slate-300 transition-colors">09292153424</p>
                  </div>
                </a>
                <a 
                  href="https://maps.google.com/?q=Iloilo+City,+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <MdLocationOn className="text-slate-400 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white group-hover:text-slate-300 transition-colors">Iloillo City, Philippines</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 text-white">Connect With Me</h2>
              
              <div className="grid grid-cols-1 gap-3">
                <a 
                  href="https://github.com/Strixyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-slate-600/20 hover:border-purple-500 border border-transparent transition-all group"
                >
                  <SiGithub className="text-gray-400 group-hover:text-slate-400 text-xl group-hover:scale-110 transition-all" />
                  <div>
                    <p className="text-white group-hover:text-slate-300">GitHub</p>
                    <p className="text-sm text-gray-400">@Strixyl</p>
                  </div>
                </a>
                
                <a 
                  //href="put linkedin profile here near futre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-slate-600/20 hover:border-slate-500 border border-transparent transition-all group"
                >
                  <SiLinkedin className="text-gray-400 group-hover:text-slate-400 text-xl group-hover:scale-110 transition-all" />
                  <div>
                    <p className="text-white group-hover:text-slate-300">LinkedIn</p>
                    <p className="text-sm text-gray-400">Juster Ureta</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-green-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Available for Work</h3>
              </div>
              <p className="text-green-200 text-sm">
                I'm currently open to new opportunities and exciting projects. Let's discuss how we can work together!
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}