//components/Bio.tsx

import Sidebar from './Sidebar';

import myPhoto from '/src/assets/images/prof_pic_2.jpg';

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
      <p><b>Senior PHP & Full-Stack Developer with 10+ years of experience</b> building scalable, high-performance web applications and backend systems.</p>
      <p>Specialized in <b>PHP, Laravel, CodeIgniter, MySQL, REST APIs</b>, and full-stack development for <b>OTT platforms, web applications, and CTV environments.</b> Proven experience integrating <b>Stripe payment gateways, In-App payment validations, Google APIs (Places, Translate),</b> and <b>cloud services using Google Cloud Platform and Firebase.</b></p>
      <p>Strong background in <b>backend architecture, performance optimization, and server management (Apache, caching, cloud infrastructure).</b> Experienced in leading backend development, mentoring junior developers, conducting code reviews, and collaborating with cross-functional teams to deliver reliable, production-ready solutions.</p>
      <p>Passionate about building maintainable systems that scale, improve performance, and meet real business needs. In addition to backend development, I build responsive frontend interfaces using React.js and modern JavaScript.</p>
    </section>
  );
};

export default Bio