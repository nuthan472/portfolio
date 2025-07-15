'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: false, margin: '-100px' });
  const isTextInView = useInView(textRef, { once: false, margin: '-100px' });
  const isImageInView = useInView(imageRef, { once: false, margin: '-100px' });

  return (
    <section
      className="relative w-full min-h-screen text-white px-6 md:px-16 overflow-hidden py-0 flex flex-col justify-center items-center"
      style={{ background: '#000000' }}
    >
      {/* Heading from Top */}
      <motion.div
        ref={headingRef}
        initial={{ y: -80, opacity: 0 }}
        animate={isHeadingInView ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10 mt-10"
      >
        <h1 className="text-4xl mt-20 md:mt-0 sm:text-6xl md:text-7xl font-extrabold uppercase leading-tight bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500 bg-clip-text text-transparent animate-gradient-text">
          I Am A <br className="sm:hidden" />
          Creative Designer
        </h1>
      </motion.div>

      {/* Content Wrapper */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center md:justify-between mt-4 z-10">
        {/* Left Text Slide In */}
        <motion.div
          ref={textRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isTextInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full text-4xl md:w-3/4 text-center md:ml-32 md:text-left"
        >
          <p className="text-3xl sm:text-2xl">
            👋 Hi, I am{' '}
            <span className="text-yellow-400 text-3xl font-semibold">
              Nuthan Harsha Vardhan Reddy
            </span>
          </p>

          <p className="mt-5 text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
            I create and maintain modern, responsive websites and full-stack applications tailored to your business needs. I specialize in solving real-world problems using efficient, scalable technology. Passionate about UI/UX design and performance optimization. Skilled in{' '}
            <span className="text-blue-400 font-semibold">React</span>,{' '}
            <span className="text-cyan-400 font-semibold">Next.js</span>,{' '}
            <span className="text-pink-400 font-semibold">Tailwind</span>,{' '}
            <span className="text-green-400 font-semibold">Node.js</span>,{' '}
            <span className="text-yellow-400 font-semibold">MongoDB</span> & more. Proven track record of delivering results for startups and agencies. Let's build products that not only work, but wow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-12 justify-center md:justify-start mt-10 mb-4 md:mb-0">
            <div className="text-center">
              <p className="text-4xl font-extrabold">10+</p>
              <p className="text-base text-white/80">Successful Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold">2+</p>
              <p className="text-base text-white/80">Years of Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Image Slide In From Bottom */}
        <motion.div
          ref={imageRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isImageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="w-full md:w-1/2 relative flex justify-center items-center -mt-14 md:-mt-20 order-first md:order-last mb-10 md:mb-0"
        >
          <div className="relative w-80 h-96">
            <img
              src="/nuthan.png"
              alt="Nuthan"
              className="w-full h-full object-cover"
            />
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-sm font-semibold px-5 py-2 rounded-full shadow-lg"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
