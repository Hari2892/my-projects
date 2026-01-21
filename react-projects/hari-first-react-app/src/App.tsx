//App.tsx

import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GoToTop from "./components/GoToTop";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      {/* LEFT FIXED SECTION */}
      <div className="right-section">
        <Header />
        <Bio />
      </div>

      {/* RIGHT SCROLLABLE SECTION */}
      <div className="left-section" id="scroll-container">
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>

      <GoToTop />
    </div>
  );
};

export default App;