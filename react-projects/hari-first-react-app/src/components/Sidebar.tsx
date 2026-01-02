//components/Header.tsx

import React from "react";
import { Link, Element } from 'react-scroll';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="Experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="Education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="Projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar