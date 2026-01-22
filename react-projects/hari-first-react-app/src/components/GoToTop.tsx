import { useEffect, useState } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      if (window.innerWidth <= 1023) {
        // Mobile / Tablet → window scroll
        setVisible(window.scrollY > 300);
      } else if (container) {
        // Desktop → container scroll
        setVisible(container.scrollTop > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    container?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (window.innerWidth <= 1023) {
      // Mobile / Tablet
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Desktop
      const container = document.getElementById("scroll-container");
      container?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
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
