import React from "react";
import "./Card.css";

const projects = [
  {
    id: 1,
    name: "Portfolio Site",
    description: "My portfolio site. Built with React JS, HTML5, and CSS.",
    link: "",
  },

  {
    id: 2,
    name: "Jammming App",
    description:
      "Career path project from Codecademy. Built from scratch without using their provided starter code. This project utilizes Spotify authentication and API so there are some limitations. You will not be able to test it without being manually added to my Spotify Developer Dashboard. If the need arises, please contact me to be added.",
    link: "",
  },

  {
    id: 3,
    name: "Flash Cards App",
    description:
      "Career path project from Codecademy. Built from scratch without provided starter code, using React JS, Redux, HTML, and CSS.",
    link: "",
  },
];

export const Card = ({ contentName, activeCard, openCard }) => {
  const getContent = (contentName) => {
    if (contentName === "About Me") {
      return (
        <div className="card">
          <h1 className="card-header">About Me</h1>
          <div className="card-body">
            I am a self-taught frontend software developer with a background in
            IT Support. I started learning about the hardware side of computers
            because I have always been fascinated by them. After 6 years of
            building and troubleshooting various systems, I decided to pivot to
            software engineering because I enjoy problem solving and challenging
            myself. I'm passionate about creating responsive web applications
            that present simplicity and comfort to the user without compromising
            robust functionality.
            <br />
            <br />I grew up with video games and that has always been a big part
            of my life so I spend most of my free time playing on my computer.
            Aside from that, I also enjoy reading and knitting. I have tried
            (repeatedly) to keep plants but unfortunately for me (and the
            plants), I wasn't blessed with a green thumb.
          </div>
        </div>
      );
    } else if (contentName === "My Projects") {
      return (
        <div className="card">
          <h1 className="card-header">My Projects</h1>
          <div className="card-body">
            <div>
              {projects.map((project) => {
                return (
                  <ul className="project-container">
                    <li>
                      <h3>{project.name}</h3>
                      <div className="project-sub">
                        <div className="bold">Description:</div>
                        <span>{project.description}</span>
                      </div>
                      <div className="project-sub">
                        <div className="bold">Link:</div>
                        <span>{project.link}</span>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (contentName === "Contact Me") {
      return (
        <div className="card">
          <h1 className="card-header">Contact</h1>
          <div className="card-body">
            <span className="bold">Email:</span> helenpt37@gmail.com
          </div>
        </div>
      );
    }
  };
  return (
    <div
      className="card-container"
      id={activeCard === contentName ? "visible" : "hidden"}
    >
      <div className="close-button" onClick={() => openCard(undefined)}>
        &times;
      </div>
      {getContent(contentName)}
    </div>
  );
};
