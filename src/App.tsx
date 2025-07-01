import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />

        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;