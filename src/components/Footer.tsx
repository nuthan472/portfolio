export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
      &copy; {new Date().getFullYear()} Nuthan. Made with Next.js, React, and Three.js.
    </footer>
  );
}