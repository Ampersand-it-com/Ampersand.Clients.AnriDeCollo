import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import styled, { css } from "styled-components";
import { smoothScrollTo } from "../../helpers/common";
import useResponsive from "../../hooks/useResponsive";
import { useSectionObserver } from "../../helpers/activeNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Controller } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";
import { colors } from "../../helpers/styleSetup";

function Main() {
  const { localized } = useLocalization();
  const screen = useResponsive();

  const id = "main";
  const ref = useSectionObserver(id);

  const handleButtonClick = (href) => {
    smoothScrollTo(href);
  };

  // Dependend sliders
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  // White slide
  const [whiteSlide, setWhiteSlide] = useState(false);

  const handleSlideChange = (swiper) => {
    console.log(swiper.realIndex);
    setWhiteSlide(swiper.realIndex === 1 ? true : false);
  };

  return (
    <StyledSection id={id} ref={ref}>
      <div className="left">
        <Swiper
          {...sliderConfig}
          creativeEffect={effect1}
          onSwiper={(swiper) => (swiper1Ref.current = swiper)}
          controller={{ control: swiper2Ref.current }}
        >
          {content.main.slider1.map((img, index) => (
            <SwiperSlide key={index}>
              <img className={"bg-image"} src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {screen !== "mobile" && (
        <div className="right">
          <USP $whiteSlide={whiteSlide}>
            <div className="text-block">
              <h1 className="title">{localized("main.title")}</h1>
              <p className="description lead">
                {localized("main.description")}
              </p>
            </div>
            <Button
              className="action"
              onClick={() => handleButtonClick(content.main.action.href)}
              variant={whiteSlide ? "inverted" : "default"}
            >
              {localized("main.action")}
            </Button>
          </USP>
          <Swiper
            {...sliderConfig}
            creativeEffect={effect2}
            autoplay={false}
            slideVisibleClass="swiper-slide-visible"
            onSwiper={(swiper) => (swiper2Ref.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {content.main.slider2.map((img, index) => (
              <SwiperSlide key={index}>
                <img className="bg-image" src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </StyledSection>
  );
}

// Butt text

const buttText = css`
  img.bg-image.butt-text {
    object-position: center 90%;
    transform: scale(1.1) translate(0, -10%);
  }

  @media screen and (max-width: 1199px) {
    img.bg-image.butt-text {
      transform: scale(1.1) translate(0, -10%);
    }
  }

  @media screen and (max-width: 719px) {
    img.bg-image.butt-text {
      transform: scale(1.3) translate(0, -16%);
    }
  }
`;

// Style

const StyledSection = styled.section`
  /* margin-top: 72px; */
  /* min-height: 720px; */
  /* height: calc(100vh - 72px); */

  display: flex;
  flex-direction: row;

  & > div {
    aspect-ratio: 0.75;

    position: relative;
    flex: 1 0 0;
    min-width: 0px;
    overflow: hidden;

    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    padding: var(--padding-xl);
  }

  .right .swiper-slide-prev {
    z-index: 10 !important;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;

    inset: 0;
    z-index: -1;

    .swiper-slide {
      transition-timing-function: cubic-bezier(0.8, 0, 0, 1);
    }

    img.bg-image {
      position: relative;
      width: 100%;
      height: 100%;
      inset: 0;
      z-index: 0;
    }

    img.bg-image-backdrop {
      position: relative;
      width: 120%;
      height: 120%;
      left: -10%;
      top: -10%;
      filter: blur(10px);
      z-index: -1;
    }
  }

  @media screen and (max-width: 1199px) {
    /* margin-top: 56px; */
    height: calc(100vh - 56px);
    min-height: 560px;
  }

  @media screen and (max-width: 719px) {
    min-height: 560px;

    .action {
      align-self: stretch;
    }
  }
`;

// USP

const USP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-l);

  ${({ $whiteSlide }) =>
    $whiteSlide &&
    css`
      color: ${colors.bg};
    `}
  transition: color 1s ease, background 1s ease;

  .title {
    line-height: 1;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-xs);
  }

  .description {
    max-width: 320px;
    font-weight: 500;
  }

  @media screen and (min-width: 1200px) {
    .title {
      font-size: min(55px, calc((100vw - 4 * var(--padding-xl)) * 0.04));
    }
  }
`;

// Slider config

const sliderConfig = {
  className: "slider",
  speed: 1000,
  modules: [Autoplay, EffectCreative, Controller],
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  noSwiping: true,
  keyboard: false,
  effect: "creative",
};

const effect1 = {
  prev: {
    shadow: false,
    scale: 1,
  },
  next: {
    translate: ["100%", 0, 0],
  },
};

const effect2 = {
  prev: {
    translate: ["100%", 0, 0],
  },
  next: {
    scale: 1,
  },
};

export default Main;
