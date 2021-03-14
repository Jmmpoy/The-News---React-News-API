import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  console.log("theme");
  const nextTheme = theme === "light" ? "dark" : "light";
  const value = {
    theme,
    nextTheme,
    toggleTheme: () => {
      setTheme(nextTheme);
    },
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
