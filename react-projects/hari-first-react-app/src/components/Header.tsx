//components/Header.tsx

const Header = () => {
  return (
    <header>
      <h1>Hariharan R</h1>
      <p>Senior PHP Developer / Fullstack Developer</p>
      <div className="resume-download">
        <a
        href="/Hariharan_R_Resume.pdf"
        download
        className="resume-btn"
        aria-label="Download Resume"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header