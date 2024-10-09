import { useEffect } from "react";
import { LocalizationProvider, useLocalization } from "./helpers/localization";
import styled from "styled-components";

// Blocks
import Header from "./components/blocks/Header";
import Main from "./components/blocks/Main";
import Features from "./components/blocks/Features";
import About from "./components/blocks/About";
import History from "./components/blocks/History";

function App() {
  const { setLocale } = useLocalization();

  useEffect(() => {
    setLocale("ukr");
  }, [setLocale]);

  return (
    <AppContainer className="app">
      <Header />
      <Main />
      <main>
        <Features />
        <About />
        <History />
      </main>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    padding: 50px 50px 150px;
    gap: 150px;
  }
`;

export default function AppWrapper() {
  return (
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  );
}
