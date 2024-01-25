import React from "react";
import "./experience.css";

// Tech stack images
import html from "../../assets/techstack/html.png";
import css from "../../assets/techstack/css.png";
import sass from "../../assets/techstack/sass.png";
import js from "../../assets/techstack/js.png";
import react from "../../assets/techstack/react.png";
import redux from "../../assets/techstack/redux.png";
import bootstrap from "../../assets/techstack/bootstrap.png";
import vscode from "../../assets/techstack/vscode.png";
import github from "../../assets/techstack/github.png";
import git from "../../assets/techstack/git.png";
import npm from "../../assets/techstack/npm.png";
import postman from "../../assets/techstack/postman.png";
import firebase from "../../assets/techstack/firebase.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="tech-container">
        <img className="tech-logo" src={html} alt="HTML" />
        <img className="tech-logo" src={css} alt="CSS" />
        <img className="tech-logo" src={js} alt="JavaScript" />
        <img className="tech-logo" src={react} alt="React" />
        <img className="tech-logo" src={redux} alt="Redux" />
        <img className="tech-logo" src={bootstrap} alt="Bootstrap" />
        <img className="tech-logo" src={vscode} alt="VSCode" />
        <img className="tech-logo" src={firebase} alt="Figma" />
        <img className="tech-logo" src={github} alt="GitHub" />
        <img className="tech-logo" src={git} alt="Git" />
        <img className="tech-logo" src={npm} alt="npm" />
        <img className="tech-logo" src={sass} alt="Sass" />
        <img className="tech-logo" src={postman} alt="Postman" />
      </div>
    </section>
  );
};

export default Experience;
