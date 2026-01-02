//App.tsx

import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="right-section">
      <Header />
      <Bio />
      <Sidebar />
      </div>

      <div className="left-section">
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;