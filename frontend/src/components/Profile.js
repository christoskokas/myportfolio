import React from 'react';
import './Profile.css';
import linkedinLogo from '../assets/linkedin.png'; // Ensure to have the image in your project
import githubLogo from '../assets/github.png';     // Ensure to have the image in your project

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-info">
          <h1>About Me</h1>
          <p>
            I am a Computer Vision Engineer with a passion for building intelligent systems 
            that solve real-world problems. I have experience in robotics, deep learning, 
            and various computer vision applications. My goal is to continue growing my skills, 
            contribute to impactful projects, and share my knowledge with the community.
          </p>
        </div>
        <div className="profile-links">
          <a href="https://www.linkedin.com/in/christos-kokas-7254ba275/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/christoskokas/" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
