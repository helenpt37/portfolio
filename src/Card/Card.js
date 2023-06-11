import React from "react";
import "./Card.css";

const projects = [
  {
    id: 1,
    name: "Portfolio Site",
    description: "",
    link: "",
  },

  {
    id: 2,
    name: "Jammming App",
    description: "",
    link: "",
  },

  {
    id: 3,
    name: "Flash Cards App",
    description: "",
    link: "",
  },

  {
    id: 4,
    name: "Starfew Valley Tracker",
    description: "",
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
            <ul>
              {projects.map((project) => {
                return (
                  <li>
                    <h3>{project.name}</h3>
                    <ul>
                      <li>
                        <p>{project.description}</p>
                      </li>
                      <li>{project.link}</li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
    // } else if (contentName === "My Resume") {
    //   return (
    //     <div className="card">
    //       <h1 className="card-header">My Resume</h1>
    //       <div className="card-body">

    //       </div>
    //     </div>
    //   );
    // }
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
