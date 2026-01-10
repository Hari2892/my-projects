//components/Bio.tsx

import React from "react";

import Sidebar from "/src/components/Sidebar";

import myPhoto from '/src/assets/images/profile_image_1.jpg';

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
      <p>Experienced Senior PHP Developer with over 10+ years of expertise in web
development. Proficient in PHP, MySQL, HTML/CSS, JavaScript, jQuery/Ajax, and
AngularJS, with a strong foundation in Firebase and Google Cloud Platform. Extensive
experience with popular frameworks like Laravel, CodeIgniter, and WordPress,
including full-stack development. Skilled in integrating third-party services such as
Google APIs (Google Place and Google Translate) and Stripe Payment Gateway. Adept
in server management with a solid understanding of Apache server installation.
Experienced in leading teams, providing mentorship, and conducting code reviews.
Passionate about delivering high-quality web applications that meet both client and
user needs.</p>
    </section>
  );
};

export default Bio