import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const Slide = ({
  isActive,
  transitionDuration = 1000,
  fadeIn = fadeInKeyframes,
  fadeOut = fadeOutKeyframes,
  children,
}) => {
  const [animation, setAnimation] = useState(null);
  const [display, setDisplay] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setAnimation(animationCss(fadeIn, transitionDuration));
      setDisplay(true);
    } else {
      setAnimation(animationCss(fadeOut, transitionDuration));
      setTimeout(() => setDisplay(false), transitionDuration);
    }
  }, [isActive]);

  return (
    <SlideContainer
      className="slide"
      $display={display}
      $animation={animation}
      $transitionDuration={transitionDuration}
    >
      {children}
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  display: ${({ $display }) => ($display ? "block" : "none")};

  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  transform: translate3d(0, 0, 0);

  ${(props) => props.$animation}
`;

const animationCss = (keyframes, duration) => css`
  animation: ${keyframes} ${duration}ms linear;
`;

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export default Slide;
