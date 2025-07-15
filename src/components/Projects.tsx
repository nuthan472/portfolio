'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  color: string;
  tagColor: string;
};

const projects: Project[] = [
  {
    title: 'VJC Overseas Website',
    description:
      'A dynamic overseas education and immigration consultancy platform showcasing services, testimonials, and contact features. Built with a 3D interactive front using React Three Fiber.',
    tech: ['React', 'Next.js', 'Node.js', 'JavaScript'],
    link: '/projects',
    image: '/vjc-overseas.png',
    color: 'text-orange-400 border-orange-400',
    tagColor: 'bg-orange-900/50 text-orange-300',
  },
  {
    title: 'Kalvenit Site',
    description:
      'Corporate website for Kalvenit featuring modern animations, responsive layout, and blog integration. Built using Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind', 'Node.js', 'React', 'TypeScript', 'JavaScript'],
    link: '/projects',
    image: '/kalvenit.png',
    color: 'text-violet-400 border-violet-400',
    tagColor: 'bg-violet-900/50 text-violet-300',
  },
  {
    title: 'NR Events',
    description:
      'Event clubbing and booking platform with real-time backend, Stripe payment integration, and MongoDB database for user and event management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'JavaScript', 'TypeScript'],
    link: '/projects',
    image: '/nr-events.png',
    color: 'text-blue-400 border-blue-400',
    tagColor: 'bg-blue-900/50 text-blue-300',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-10 pb-12 bg-gray-950 text-white relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((proj, i) => (
<motion.div
  key={proj.title}
  initial={{ opacity: 0, scale: 0.9, y: 40 }}
  animate={
    isInView
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 0, scale: 0.9, y: 40 }
  }
  transition={{
    delay: i * 0.2,
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative max-w-xs w-full"
>
  <a
    href={proj.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black/90 p-5 shadow-xl z-10"
  >
    {/* ✨ Image */}
    <img
      src={proj.image}
      alt={proj.title}
      className="rounded mb-4 w-full h-40 object-cover border border-gray-700"
    />

    {/* ✨ Content */}
    <h3 className={`text-2xl font-semibold mb-2 ${proj.color}`}>
      {proj.title}
    </h3>
    <p className="text-gray-300 mb-3 text-sm">{proj.description}</p>
    <div className="flex flex-wrap gap-2">
      {proj.tech.map((tech) => (
        <span
          key={tech}
          className={`px-2 py-1 rounded text-xs ${proj.tagColor}`}
        >
          {tech}
        </span>
      ))}
    </div>

    {/* ✅ Perfectly aligned animated border */}
    <span
      className={`pointer-events-none absolute inset-0 rounded-xl border-2 ${proj.color} opacity-0 group-hover:opacity-100 group-hover:animate-borderDraw`}
    />
  </a>
</motion.div>

        ))}
      </div>
    </section>
  );
}
