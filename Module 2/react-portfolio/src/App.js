import AboutMe from "./components/about.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import ContactForm from "./components/contactform.js";

import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#about" className="logo">
          Meghana
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Meghana Reddy.
          Built with React.
        </p>
      </footer>
    </>
  );
}

export default App;
