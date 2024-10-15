import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Context

const ActiveSectionContext = createContext();

export const useActiveSection = () => useContext(ActiveSectionContext);

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Hook

export const useSectionObserver = (id) => {
  const { setActiveSection } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    delay: 500,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return ref; // Ref for section
};
