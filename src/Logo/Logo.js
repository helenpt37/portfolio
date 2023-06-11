import React from "react";
import "./Logo.css";

export const Logo = ({ name, src }) => {
  return (
    <div className="logo">
      <img src={src} alt={name} />
    </div>
  );
};
