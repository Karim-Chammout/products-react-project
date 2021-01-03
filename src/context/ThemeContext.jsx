import React from "react";
import { lightTheme, darkTheme } from "../theme/themes";

const ThemeContext = React.createContext();

function Context(props) {
  const [ themeObj, setThemeObj ] = React.useState(lightTheme);

  function themeToggler() {
    themeObj.theme === "light" ? setThemeObj(darkTheme): setThemeObj(lightTheme);
  }

  return (
    <ThemeContext.Provider value={{ themeObj, themeToggler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, Context };