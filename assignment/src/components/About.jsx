import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="section">
        <div className="section-heading">About the job</div>
        <ul className="list-items">
          <li>Handle the UI/UX design</li>
          <li>Work on researching latest web application designs & trends</li>
          <li>Conceptualize and visualize</li>
          <li>Create graphics content and perform related tasks</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-heading">Benefits</div>
        <ul>
          <li>Health Insurance</li>
          <li>Provident Fund</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-heading">Schedule</div>
        <ul>
          <li>Day shift</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-heading">Supplemental Pay types</div>
        <ul>
          <li>Performance Bonus</li>
          <li>Yearly Bonus</li>
        </ul>
      </div>

      <div className="location">Work Location: In Person</div>
    </div>
  );
};

export default About;
