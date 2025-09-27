import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiFlutter } from "react-icons/si";

// Type definitions
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);


    const nodes: Node[] = [];
    const nodeCount: number = 50;
    

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }


    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      

      nodes.forEach((node: Node) => {

        node.x += node.vx;
        node.y += node.vy;
        
     
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
  
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 112, 219, ${node.opacity})`;
        ctx.fill();
      });
      
  
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx: number = nodes[i].x - nodes[j].x;
          const dy: number = nodes[i].y - nodes[j].y;
          const distance: number = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity: number = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(147, 112, 219, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

// floating elemets design ,,,
const FloatingElements: React.FC = () => {
  return (
    <>
      
      <div className="absolute top-24 right-16 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-purple-400/50"></div>
      <div className="absolute top-32 right-12 w-1 h-1 bg-pink-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="absolute bottom-40 left-12 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-pulse shadow-lg shadow-purple-300/50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      
    
      <div className="absolute top-28 left-20 w-3 h-3 border border-purple-400/30 rotate-45 opacity-40 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-28 right-24 w-2 h-2 border border-pink-300/40 rotate-12 opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
    </>
  );
};

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans relative overflow-hidden flex flex-col">
      {/* Network Background */}
      <NetworkBackground />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Original purple blur effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full opacity-30 blur-3xl top-[-100px] left-[-100px] z-0"></div>
      
      {/* Additional blur effects for more depth */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full opacity-20 blur-3xl bottom-[-50px] right-[-50px] z-0"></div>
      
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-700/50 backdrop-blur-sm z-10 relative">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-400 via-white-400 to-pink-300 bg-clip-text text-transparent">
              Juster
            </span>
          </h1>
        </div>
        <ul className="flex space-x-6 text-sm font-bold">
          <li>
            <Link href="/" className="hover:text-purple-300 transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-purple-300 transition-colors duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/works" className="hover:text-purple-300 transition-colors duration-300 relative group">
              Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-300 transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
      
    <main className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-10 md:py-12 xl:py-8 min-h-[70vh] xl:min-h-[75vh] z-10 relative">
        <div className="md:w-[40%] w-full mb-10 md:mb-0 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Hi, I'm <span className="text-purple-400">Juster</span><br />
            <span className="text-xl md:text-3xl font-bold text-gray-300">
              A Computer Science student specializing in <span className="text-purple-300 font-bold">Data Science</span><br />
               with a touch of <span className="text-purple-300 font-semibold">Web Design</span> creativity.
            </span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link href="/contact">
              <button className="px-8 py-3 text-lg bg-white text-black hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-full font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl">
                Get in Touch!
              </button>
            </Link>
            <Link href="/works">
              <button className="px-8 py-3 text-lg bg-purple-600/80 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 rounded-full font-semibold shadow-lg border border-purple-400/30 transform hover:scale-105 hover:shadow-xl">
                Browse Projects
              </button>
            </Link>
          </div>
        </div>
        
        <div className="md:w-[40%] w-full flex justify-center items-center">
          <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full bg-[#7833ff] shadow-2xl overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-300 to-purple-600 opacity-75 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-2 rounded-full bg-[#7833ff] overflow-hidden">
              <Image
                src="/images/elgatopic.png"
                alt="Profile"
                fill
                className="object-cover scale-110 transition-transform duration-300 group-hover:scale-125"
              />
            </div>
            {/* Floating orbs around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </main>
      
    <footer className="flex justify-center space-x-8 py-6 mt-auto mb-8 text-gray-400 font-bold text-sm relative z-10">
        <Link href="https://linkedin.com" target="_blank" className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 transform hover:scale-110">
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </Link>
        <Link href="https://github.com/Strixyl" target="_blank" className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 transform hover:scale-110">
          <FaGithub size={20} />
          <span>GitHub</span>
        </Link>
        <Link href="mailto:uretajuster@gmail.com" target="_blank" className="flex items-center space-x-2 hover:text-purple-300 transition-all duration-300 transform hover:scale-110">
          <SiGmail size={20} />
          <span>G-Mail</span>
        </Link>
      </footer>
    </div>
  );
}