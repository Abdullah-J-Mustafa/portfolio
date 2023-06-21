import React from 'react'
import { 
  SiLinkedin,
  SiGmail,
  SiGithub,
  SiInstagram
} from "react-icons/si";
import './social-links.css'

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="work.abdullahjm@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail/>
      </a>
      <a href="https://github.com/Abdullah-J-Mustafa/" target="_blank" rel="noopener noreferrer">
        <SiGithub/>
      </a>
      <a href="https://www.linkedin.com/in/abdullahjm/" target="_blank" rel="noopener noreferrer">
        <SiLinkedin/>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <SiInstagram/>
      </a>
    </div>
  );
}

export default SocialLinks;