import React from "react";
import { ThemeContext } from "../context/ThemeContext"

function ContextAPIButton(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { themeToggler } = themeContextAPI;
  
  return (
    <button className="btn btn-danger" onClick={themeToggler}>
      Change Theme
    </button>
  );
}

export default ContextAPIButton;