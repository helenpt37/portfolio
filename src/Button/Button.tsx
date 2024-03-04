import React from "react";
import "./Button.css";

export const Button = ({ name, openCard }) => {

  return (
    <div>
      <div className="button-div" onClick={() => openCard(name)}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>
        <div className="button">{name}</div>
      </div>
    </div>
  );
};
