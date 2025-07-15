import { Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import HirePage from './pages/hire';

// Import common layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scrollindicator from './components/Scrollindicator'; // or LoadingBar if you have one

export default function App() {
  return (
    <>
      <Navbar />
      <Scrollindicator /> {/* or a ProgressBar, depends on your setup */}
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/hire" element={<HirePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
