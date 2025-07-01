export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-cyan-900 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form
        className="bg-black p-8 rounded-lg shadow-lg flex flex-col gap-4 max-w-md w-full"
        action="mailto:your@email.com"
        method="POST"
        encType="text/plain"
      >
        <input
          className="bg-gray-800 rounded p-3 text-white"
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className="bg-gray-800 rounded p-3 text-white"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          className="bg-gray-800 rounded p-3 text-white"
          placeholder="Your Message"
          name="message"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 flex space-x-6">
        <a href="https://github.com/nuthan472" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-cyan-400 transition">GitHub</a>
        <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-cyan-400 transition">LinkedIn</a>
      </div>
    </section>
  );
}