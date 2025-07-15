
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Scrollindicator from "./Scrollindicator";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <Scrollindicator />
    </div>
  );
};

export default App;
