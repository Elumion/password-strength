import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Sections from "../PasswordStrengthSections";
import { SectionsStrength } from "../PasswordStrengthSections/index.types";
import { validatePassword } from "./validation";

export default function PasswordInput() {
  const [passwordStrength, setPasswordStrength] = useState<SectionsStrength>(
    SectionsStrength.EMPTY
  );
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strength = validatePassword(e.target.value);
    setPasswordStrength(strength);
  };

  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (passwordInputRef) {
      const input = passwordInputRef.current;
      if (input?.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
        target.innerText = "hide";
      } else if (input?.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        target.innerText = "show";
      }
    }
  };

  return (
    <div>
      <span className="password-input__container">
        <input
          ref={passwordInputRef}
          name="password"
          onChange={handleOnChange}
          className="password-input"
          type="password"
          placeholder="Password"
        />
        <button className="toggle-show-password" onClick={handleShowPassword}>
          show
        </button>
      </span>
      <div className="sections__container">
        <Sections strengthValue={passwordStrength} />
      </div>
    </div>
  );
}
