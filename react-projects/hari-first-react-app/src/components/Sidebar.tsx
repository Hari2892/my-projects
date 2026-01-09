import React, { useEffect, useState } from "react";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("skills");

  // Scroll on click
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // Observe scrolling
  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,        // 👈 IMPORTANT
        threshold: 0.6          // 60% visible = active
      }
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Sidebar">
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <button
              className={`nav-link ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
