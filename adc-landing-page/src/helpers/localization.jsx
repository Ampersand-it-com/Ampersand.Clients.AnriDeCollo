import React, { createContext, useContext, useState } from "react";
import content from "./content";

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState("eng");

  const localized = (path) => {
    // Get value by given path
    const keys = path.split(".");
    const value = keys.reduce((obj, key) => obj?.[key], content);

    // Find end string
    const endValue =
      typeof value === "string"
        ? value
        : value[locale] || Object.values(value)[0];

    // Split strings and add <br> between if needed
    const result = endValue.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < endValue.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));

    // Return the result (array of React elements)
    return result;
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, localized }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
