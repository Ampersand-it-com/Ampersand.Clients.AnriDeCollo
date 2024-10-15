import { useEffect } from "react";
import { LocalizationProvider, useLocalization } from "./helpers/localization";
import styled from "styled-components";

// Blocks
import Header from "./components/blocks/Header";
import Main from "./components/blocks/Main";
import Features from "./components/blocks/Features";
import About from "./components/blocks/About";
import History from "./components/blocks/History";
import Services from "./components/blocks/Services";
import Benefits from "./components/blocks/Benefits";
import Products from "./components/blocks/Products";
import Contact from "./components/blocks/Contact";
import Reviews from "./components/blocks/Reviews";
import Footer from "./components/blocks/Footer";
import FAQ from "./components/blocks/FAQ";
import Workflow from "./components/blocks/Workflow";
import { breakpoints } from "./helpers/styleSetup";

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
        <Benefits />
        <Services />
        <Products />
        <Contact />
        <Reviews />
        <Workflow />
        <FAQ />
      </main>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xl);
    padding-bottom: 100px;

    & > * {
      padding: var(--padding-xl);
    }
  }

  @media screen and (min-width: ${breakpoints.ultrawide}px) {
    max-width: ${breakpoints.ultrawide}px;
    overflow: hidden;
    margin-left: calc((100vw - ${breakpoints.ultrawide}px) / 2);
  }

  @media screen and (max-width: 1199px) {
    main {
      gap: 60px;
      padding-bottom: 80px;
    }
  }
`;

export default function AppWrapper() {
  return (
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  );
}
