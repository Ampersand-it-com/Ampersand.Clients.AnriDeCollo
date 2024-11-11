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
    let endValue =
      typeof value === "string"
        ? value
        : value[locale] || Object.values(value)[0];

    // Handle line breaks
    endValue = endValue.replace(/\n/g, "<br>");

    return endValue;
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
