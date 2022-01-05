import React, { useState, useContext, createContext } from "react";

const DarkModeContext = createContext({});

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(
    Boolean(JSON.parse(localStorage.getItem("darkMode")))
  );
  const darkModeContextValue = {
    darkMode,
    setDarkMode,
  };
  return (
    <DarkModeContext.Provider value={darkModeContextValue} {...props}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const ctx = useContext(DarkModeContext);

  if (!ctx) {
    throw new Error("useDarkMode() must be called within an DarkModeProvider");
  }
  return ctx;
};

export { DarkModeProvider, useDarkMode };
