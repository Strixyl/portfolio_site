import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p>This is the about page content.</p>
    </div>
  );
}
