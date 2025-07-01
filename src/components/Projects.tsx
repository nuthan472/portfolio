const projects = [
  {
    title: "3D Portfolio Website",
    description: "A fully interactive developer portfolio with 3D animations and models using React Three Fiber and Next.js.",
    tech: ["React", "Next.js", "Three.js", "TypeScript"],
    link: "#",
    image: "/images/portfolio-3d.png"
  },
  {
    title: "Creative Blog Platform",
    description: "A modern blog platform with beautiful markdown rendering, dark mode, and custom themes.",
    tech: ["Next.js", "Tailwind", "Node.js"],
    link: "#",
    image: "/images/blog.png"
  },
  {
    title: "E-commerce Store",
    description: "A fast, full-stack e-commerce store with Stripe payments and user authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "/images/ecommerce.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black bg-opacity-70 rounded-lg shadow-lg max-w-xs p-5 hover:scale-105 transition border-2 border-gray-800 hover:border-cyan-400"
          >
            <img src={proj.image} alt={proj.title} className="rounded mb-4 w-full h-40 object-cover" />
            <h3 className="text-2xl font-semibold text-cyan-400">{proj.title}</h3>
            <p className="text-gray-300 mt-2 mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}