//components/Projects.tsx

import React from "react";

const Projects = () => {
  return (
    <section className="Projects" id="projects"> 
      <h2>Projects</h2>
      <div>
        <h3 className="projectTitle">kweliTV</h3>
        <p className="projectSub"><b>OTT Platform | Backend APIs for Web, Mobie and CTV | Payment Integration</b></p>
        <ul>
          <li>Designed and maintained scalable <b>REST APIs</b> supporting <b>Web, Mobile and CTV applications.</b></li>
          <li>Integrated <b>Stripe Payment Gateway</b> for secure online transactions for <b>SVOD & TVOD</b> payments.</li>
          <li>Built backend services using <b>PHP, MySQL and Codeigniter,</b> ensuring high performance and reliability.</li>
          <li>Supported production systems used by <b>thousands of users,</b> focusing on stability and scalability.</li>
          <li>Integrated and handled payments for <b>Website, Mobile and CTV</b> endpoints.</li>
        </ul>
        <a href="https://kweli.tv/" target="_blank">See It in Action</a>
      </div>

      <div>
        <h3 className="projectTitle">Lit TV</h3>
        <p className="projectSub"><b>OTT Platform | Backend API Integration</b></p>
        <ul>
          <li>Developed and maintained backend APIs to power content delivery for a web-basaed OTT platform.</li>
          <li>Implemented secure and optimized API endpoints to support dynamic content rendering.</li>
          <li>Collaborated closely with frontend teams to ensure seamless API consumption and user experience.</li>
        </ul>
        <a href="https://www.littvnetwork.com/" target="_blank">See It in Action</a>
      </div>

      <div>
        <h3 className="projectTitle">HTV Fun</h3>
        <p className="projectSub"><b>Web Application | Payment Integration</b></p>
        <ul>
          <li>Developed backend APIs for a content driven web application using <b>PHP and MySQL.</b></li>
          <li>Integrated <b>Stripe Payment Gateway</b> for secure online transactions within the shop module.</li>
          <li>Ensured payment flow reliability, data security and smooth user checkout experience.</li>
        </ul>
        <a href="https://htvfun.com/" target="_blank">See It in Action</a>
      </div>

      <div>
        <h3 className="projectTitle">Atelier Cocktail</h3>
        <p className="projectSub"><b>Business Website | Wordpress Development</b></p>
        <ul>
          <li>Designed and developed a business website using <b>WordPress,</b> focusing on usability and content management.</li>
          <li>Customized themes and implemented responsive UI using <b>HTML, CSS, JavaScript and juery.</b></li>
          <li>Delivered a maintainable solution enabling easy content updates by non-technical users.</li>
        </ul>
        <a href="https://www.atelier-cocktail.com/" target="_blank">See It in Action</a>
      </div>

      <div>
        <h3 className="projectTitle">Polished RX</h3>
        <p className="projectSub"><b>Business Website | Wordpress Development</b></p>
        <ul>
          <li>Built and customized a WordPress-based website for business requirements.</li>
          <li>Implemented responsive web design using <b>HTML, CSS, JavaScript and jQuery.</b></li>
          <li>Ensured coss-browser compatability and optimized page performance.</li>
        </ul>
        <a href="https://www.polishedrx.com/" target="_blank">See It in Action</a>
      </div>
    </section>
  );
};

export default Projects