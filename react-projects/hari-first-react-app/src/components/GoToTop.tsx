import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`go-to-top ${visible ? "show" : ""}`}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Go to top"
    >
      ↑
    </button>
  );
};

export default GoToTop;