//App.tsx

import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;