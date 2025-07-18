import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myimage from '../assets/kashyap avatar.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myimage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kashyapambaliya" target="_blank" rel="noreferrer noopener"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kashyap-ambaliya/" target="_blank" rel="noreferrer noopener"><LinkedInIcon/></a>
          </div>
          <h1>Kashyap Ambaliya</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kashyapambaliya" target="_blank" rel="noreferrer noopener"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kashyap-ambaliya/" target="_blank" rel="noreferrer noopener"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;