import React from "react";
import "./index.css";
import Sections from "../PasswordStrengthSections";

export default function PasswordInput() {
  return (
    <div>
      <span className="password-input__container">
        <input
          className="password-input"
          type="password"
          placeholder="Password"
        />
      </span>
      <div className="sections__container">
        <Sections />
      </div>
    </div>
  );
}
