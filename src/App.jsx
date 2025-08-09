import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Home />
        <About />
        <ProjectShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;