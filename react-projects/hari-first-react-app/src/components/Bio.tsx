//components/Bio.tsx

import Sidebar from './Sidebar';

import myPhoto from '/src/assets/images/my_profile_img.png';

const Bio = () => {
  return (
    <section className="bio">
      <div className="bio-full">
        <div className="bio-left">
          <img src={myPhoto} alt="Hariharan R" /> 
        </div>
        <div className="bio-right">
          <Sidebar />
        </div>
      </div>
      <h2>About Me</h2>
      <p><b>Senior Backend & Full-Stack Developer with 10+ years of experience in building scalable, high-performance web applications, backend systems and microservices.</b></p>
      <p>Deeply specialized in backend architecture using PHP (Laravel, CodeIgniter) and modern <b>Python frameworks (FastAPI)</b>. I have a proven track record of designing robust REST APIs, integrating complex third-party services like Stripe for global OTT platforms, and managing relational databases including MySQL and PostgreSQL.</p>
      <p>Passionate about modernizing developer workflows, I actively build within the AI ecosystem—leveraging <b>LLM APIs</b> and AI-assisted tooling to engineer intelligent, efficient command-line tools and backend systems. Experienced in leading backend development, optimizing server performance, and collaborating with cross-functional teams to deliver secure, production-ready solutions.</p>
    </section>
  );
};

export default Bio