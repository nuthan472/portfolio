import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="#about">About</Link>
      <Link to="#skills">Skills</Link>
      <Link to="#projects">Projects</Link>
    </nav>
  );
}