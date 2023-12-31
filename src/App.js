import { React, useState } from "react";
import "./App.css";
import { Logo } from "./Logo/Logo.js";
import { Button } from "./Button/Button.js";
import { Card } from "./Card/Card.js";
import cssLogo from "./Logo/cssLogo.png";
import htmlLogo from "./Logo/htmlLogo.png";
import reactLogo from "./Logo/reactLogo.png";
import jsLogo from "./Logo/jsLogo.png";
import reduxLogo from "./Logo/reduxLogo.png";
import Resume2023 from "./assets/new-resume2023.pdf";

const cardData = [
  {
    id: 1,
    name: "About Me",
  },
  {
    id: 2,
    name: "My Projects",
  },

  {
    id: 3,
    name: "My Resume",
  },

  {
    id: 4,
    name: "Contact Me",
  },
];

const logoData = [
  { id: 1, name: "JS Logo", src: jsLogo },
  { id: 2, name: "React Logo", src: reactLogo },
  { id: 3, name: "HTML Logo", src: htmlLogo },
  { id: 4, name: "CSS Logo", src: cssLogo },
  { id: 5, name: "Redux Logo", src: reduxLogo },
];
function App() {
  const [activeCard, setActiveCard] = useState(undefined);

  const openCard = (card) => {
    if (card === "My Resume") {
      window.open(Resume2023, "_blank");
    }
    setActiveCard(card);
  };

  const handleContainerClick = (event) => {
    if (event.target.className !== "cards-container") {
      return;
    } else {
      setActiveCard(undefined);
    }
  };

  return (
    <div className="App">
      <div className="header-container">
        <div className="header-text">
          Hello, my name is <span className="colored-text">Helen</span>
        </div>
        <div className="header-text">
          I am a <span className="colored-text">front-end</span> developer
        </div>
      </div>
      <div className="logos-container">
        {logoData.map((logo) => (
          <Logo name={logo.name} src={logo.src} key={logo.id} />
        ))}
      </div>
      <div className="buttons-container">
        {cardData.map((card) => (
          <Button name={card.name} openCard={openCard} key={card.id} />
        ))}
      </div>
      <div
        className="cards-container"
        id={
          activeCard === "My Resume" || activeCard === undefined
            ? "hidden"
            : "visible"
        }
        onClick={handleContainerClick}
      >
        {activeCard !== "My Resume" && (
          <Card
            contentName={activeCard}
            activeCard={activeCard}
            openCard={openCard}
          />
        )}
      </div>
    </div>
  );
}

export default App;
