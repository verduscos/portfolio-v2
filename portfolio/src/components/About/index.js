import React from "react";
import Resume from "../../assets/Verdusco_Eddie_Resume.pdf";
import Self from "../../assets/images/personal.jpg";
import { BiLinkExternal } from "react-icons/bi";
import "./About.css";

function About() {

  return (
    <div id="about">
      <h1 id="about-title">My journey</h1>
      <div id="bio">
        <p>My love for anything tech-related started at a very young age. I never realized that solving puzzles as my childhood hero, Link, from The Legend of Zelda, would spark my curiosity and instill me with a love for problem-solving. My heart was always on joining the tech industry, but life led me into sales first. While in car sales, I developed skills in managing deadlines, prioritizing tasks, and being able to work with people from any walk of life. I learned the value of being a self-starter, the importance of self-reliance, and when to ask for help or when to "turn the deal" in car lingo. It’s my unique trajectory that will set me apart from other developers.</p>
        <img id="me" src={Self} alt="Eddie V" />
      </div>
      <div id="resume">
        <a href={Resume} target='_blank' rel="noreferrer">
          View my resume
        </a>
        <BiLinkExternal />
      </div>
    </div>
  )
}

export default About;
