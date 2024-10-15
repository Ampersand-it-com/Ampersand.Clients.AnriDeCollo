import { useEffect, useState } from "react";
import { breakpoints } from "../helpers/styleSetup";

const useResponsive = () => {
  const getScreenType = () => {
    const width = window.innerWidth;
    if (width < breakpoints.tablet) {
      return "mobile";
    } else if (width < breakpoints.desktop) {
      return "tablet";
    } else if (width < breakpoints.ultrawide) {
      return "desktop";
    } else {
      return "ultrawide";
    }
  };

  const [screenType, setScreenType] = useState(getScreenType());

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useResponsive;
