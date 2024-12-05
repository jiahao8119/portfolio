
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
