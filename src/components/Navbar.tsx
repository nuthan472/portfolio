'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY - lastScrollY.current > 5
      ) {
        setShowNav(false);
      } else if (lastScrollY.current - currentScrollY > 5) {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Home */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide hover:text-teal-200 transition-all duration-300"
        >
          Nuthan.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium text-white">
          {['Home', 'about', 'projects', 'hire'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item}`}
              className="relative group transition duration-300 hover:text-yellow-300 capitalize"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
          >
            <FaPhoneAlt /> +91-9876543210
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white hover:text-yellow-300 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 text-white flex flex-col items-center gap-6 py-8 text-xl"
        >
          {['Home', 'about', 'projects', 'hire'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item}`}
              onClick={() => setOpen(false)}
              className="capitalize"
            >
              {item}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt /> +91-9876543210
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
