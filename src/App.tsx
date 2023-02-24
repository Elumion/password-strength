import { useState } from "react";
import "./App.css";
import PasswordInput from "./components/PasswordInput";

function App() {
  return (
    <div className="global-container">
      <form className="form-password-checker" action="post">
        <PasswordInput />
      </form>
    </div>
  );
}

export default App;
