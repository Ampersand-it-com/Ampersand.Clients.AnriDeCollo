import { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide";

const Slider = ({
  interval = 4000,
  children,
  className = "",
  fadeIn,
  fadeOut,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto
  useEffect(() => {
    const switchSlide = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % children.length);
    }, interval);
    return () => clearInterval(switchSlide);
  }, [children, interval]);

  return (
    <SliderContainer className={"slider " + className} {...props}>
      {children.map((child, index) => (
        <Slide
          key={index}
          isActive={index === activeIndex}
          fadeIn={fadeIn}
          fadeOut={fadeOut}
        >
          {child}
        </Slide>
      ))}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
`;

export default Slider;
