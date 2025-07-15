'use client';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="pt-10 pb-10 px-6 bg-gray-950 text-white flex flex-col items-center text-center"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        Who Am I?
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg sm:text-xl text-gray-300 leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
      >
        I'm{' '}
        <span className="text-yellow-400 font-bold">
          Nuthan Harsha Vardhan Reddy
        </span>
        , a creative full-stack developer who blends design and code to craft
        stunning digital experiences. From sleek UI/UX to robust backend logic,
        I build products that don’t just work—they <strong>wow</strong>.
      </motion.p>

      <motion.div
        className="mt-10 grid sm:grid-cols-2 gap-8 max-w-4xl w-full"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={3}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 24px rgba(0,255,255,0.3)',
          }}
          className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-cyan-500/20 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">
            ✨ My Superpowers
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-left leading-relaxed">
            <li>Full-stack development with React, Next.js, Node.js</li>
            <li>Responsive, pixel-perfect UI with Tailwind & Figma</li>
            <li>Real-time 3D experiences using Three.js</li>
            <li>API integration, authentication, and deployment</li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 24px rgba(255,0,128,0.3)',
          }}
          className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-pink-500/20 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-pink-400">
            🚀 Why Work With Me?
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-left leading-relaxed">
            <li>Detail-obsessed and client-focused</li>
            <li>Proven delivery for startups & businesses</li>
            <li>Clean code. Fast load. Zero fluff.</li>
            <li>Friendly, committed, and always learning</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={4}
        viewport={{ once: true }}
      >
        <Link to="/about-me">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-yellow-400 hover:to-red-500 transition duration-300 shadow-xl text-white text-lg font-semibold hover:scale-105">
            Know More →
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
