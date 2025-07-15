'use client';
import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative -mt-36 overflow-hidden h-screen w-full bg-black text-white flex flex-col items-center justify-center"
    >
      {/* 🌊 Water Background */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute top-0 left-0 w-full h-full z-0 animate-fall bg-water-pattern opacity-40 pointer-events-none"
      />

      {/* 💬 Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 z-10">
        Let’s Connect
      </h2>

      {/* 💎 Form with Cloud Border */}
      <div className="relative z-10 max-w-md w-full">
        <div className="absolute -inset-1 rounded-2xl bg-cloud animate-cloudBorder blur-lg opacity-70 z-0"></div>

        <form
          className="relative backdrop-blur-xl bg-black/70 border border-white/10 p-8 rounded-2xl shadow-xl flex flex-col gap-5 w-full z-10"
          action="mailto:your@email.com"
          method="POST"
          encType="text/plain"
        >
          <input
            className="bg-black/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="bg-black/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            className="bg-black/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            placeholder="Your Message"
            name="message"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            🌈 Send Message
          </button>
        </form>
      </div>

      {/* 🔗 Social Links */}
      <div className="z-10 mt-4 flex space-x-8 text-3xl">
        <a
          href="https://github.com/nuthan472"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
