import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Internship } from "./components/Internship/Internship";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      {/* Apply the margin top here to avoid overlapping */}
      <div style={{ marginTop: '100px' }}>
        <About />
        <Internship />
        <Projects />
        <Contact />
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;

