import { useEffect, useState } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const toggleVisibility = () => {
      setVisible(container.scrollTop > 300);
    };

    container.addEventListener("scroll", toggleVisibility);

    return () => {
      container.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById("scroll-container");
    container?.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`go-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      ↑
    </button>
  );
};

export default GoToTop;
