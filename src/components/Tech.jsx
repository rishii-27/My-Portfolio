import React from "react";
import "./Tech.css"; // Import your CSS file for styling

// Tech stack images
import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import sass from "../assets/techstack/sass.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import redux from "../assets/techstack/redux.png";
import tailwind from "../assets/techstack/tailwind.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import vscode from "../assets/techstack/vscode.png";
import github from "../assets/techstack/github.png";
import git from "../assets/techstack/git.png";
import npm from "../assets/techstack/npm.png";
import postman from "../assets/techstack/postman.png";
import figma from "../assets/techstack/figma.png";

// Import your tech stack images
// (Assuming you have already imported them as in your previous code)

const Tech = () => {
  return (
    <div className="tech-container">
      <img className="tech-logo" src={html} alt="HTML" />
      <img className="tech-logo" src={css} alt="CSS" />
      <img className="tech-logo" src={sass} alt="Sass" />
      <img className="tech-logo" src={js} alt="JavaScript" />
      <img className="tech-logo" src={react} alt="React" />
      <img className="tech-logo" src={redux} alt="Redux" />
      <img className="tech-logo" src={tailwind} alt="Tailwind CSS" />
      <img className="tech-logo" src={bootstrap} alt="Bootstrap" />
      <img className="tech-logo" src={vscode} alt="VSCode" />
      <img className="tech-logo" src={github} alt="GitHub" />
      <img className="tech-logo" src={git} alt="Git" />
      <img className="tech-logo" src={npm} alt="npm" />
      <img className="tech-logo" src={postman} alt="Postman" />
      <img className="tech-logo" src={figma} alt="Figma" />
    </div>
  );
};

export default Tech;
