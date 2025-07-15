import Hero from '../../components/Hero';
import About from '../../components/About';
import Projects from '../../components/Projects';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import ScrollIndicator from '../../components/Scrollindicator';
import Navbar from '../../components/Navbar';

export default function HomePage() {
  return (
    <div className="relative">
     
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
     
      <ScrollIndicator />
    </div>
  );
}
