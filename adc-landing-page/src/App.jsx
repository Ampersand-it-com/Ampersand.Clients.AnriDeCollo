import { useEffect } from "react";
import "./App.css";

import { LocalizationProvider, useLocalization } from "./helpers/localization";

// Blocks
import Header from "./components/blocks/Header";
import Main from "./components/blocks/Main";

function App() {
  const { setLocale } = useLocalization();

  useEffect(() => {
    setLocale("ukr");
  }, [setLocale]);

  return (
    <div className="app">
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  );
}
