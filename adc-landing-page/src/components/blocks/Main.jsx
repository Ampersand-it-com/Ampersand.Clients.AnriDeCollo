import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import styled from "styled-components";
import { smoothScrollTo } from "../../helpers/common";
import TitleUkr from "../../assets/svg/title-ukr.svg?react";
import TitleEng from "../../assets/svg/title-eng.svg?react";
import useResponsive from "../../hooks/useResponsive";
import { useSectionObserver } from "../../helpers/activeNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Controller } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

function Main() {
  const { locale, localized } = useLocalization();
  const screen = useResponsive();

  const id = "main";
  const ref = useSectionObserver(id);

  const handleButtonClick = (href) => {
    smoothScrollTo(href);
  };

  // Dependend sliders
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  return (
    <StyledSection id={id} ref={ref}>
      <div className="left">
        {locale == "ukr" ? (
          <TitleUkr className="title-svg" />
        ) : (
          <TitleEng className="title-svg" />
        )}
        <h1 className="title">{localized("main.title")}</h1>
        <div className="col">
          <p className="description lead">{localized("main.description")}</p>
          <Button
            className="action"
            onClick={() => handleButtonClick(content.main.action.href)}
          >
            {localized("main.action")}
          </Button>
        </div>
        <Swiper
          className="slider"
          speed={1000}
          modules={[Autoplay, EffectCreative, Controller]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          noSwiping={true}
          keyboard={false}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: false,
              scale: 0.9,
            },
            next: {
              translate: ["108%", 0, 0],
            },
          }}
          onSwiper={(swiper) => (swiper1Ref.current = swiper)}
          controller={{ control: swiper2Ref.current }}
        >
          {content.main.slider1.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                className={"bg-image" + (index === 0 ? " butt-text" : "")}
                src={img}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {screen !== "mobile" && (
        <div className="right">
          <Button
            variant="bare"
            onClick={() => handleButtonClick(content.main.details.href)}
          >
            {localized("main.details")} <ArrowDown />
          </Button>
          <Swiper
            className="slider"
            speed={1000}
            modules={[Autoplay, EffectCreative, Controller]}
            slidesPerView={1}
            loop={true}
            allowTouchMove={false}
            noSwiping={true}
            keyboard={false}
            effect="creative"
            creativeEffect={{
              prev: {
                translate: ["108%", 0, 0],
              },
              next: {
                scale: 0.9,
              },
            }}
            slideVisibleClass="swiper-slide-visible"
            onSwiper={(swiper) => (swiper2Ref.current = swiper)}
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

const StyledSection = styled.section`
  /* margin-top: 72px; */
  min-height: 720px;
  height: calc(100vh - 72px);

  display: flex;
  flex-direction: row;

  & > div {
    position: relative;
    flex: 1 0 0;
    min-width: 0px;
    overflow: hidden;

    padding: var(--padding-xl);
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title-svg {
      width: 100%;
      height: auto;
    }

    .title {
      text-transform: uppercase;
      font-size: var(--title-size);
      position: absolute;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      color: transparent;
    }

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .description {
      text-align: center;
      max-width: 320px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;

    .slider {
      .swiper-slide-prev {
        z-index: 10 !important;
      }
    }
  }

  img.bg {
    position: absolute;
    width: 100%;
    height: 100%;

    inset: 0;
    z-index: -1;
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
      width: 116%;
      height: 116%;
      left: -8%;
      top: -8%;
    }
  }

  img.bg-image.butt-text {
    object-position: center 90%;
    transform: scale(1.1) translate(0, -10%);
  }

  @media screen and (min-width: 1600px) {
    img.bg-image.butt-text {
      object-position: center 100%;
      transform: scale(1.1) translate(0, 0);
    }
  }

  @media screen and (max-width: 1199px) {
    /* margin-top: 56px; */
    height: calc(100vh - 56px);
    min-height: 560px;

    img.bg-image.butt-text {
      transform: scale(1.1) translate(0, -10%);
    }
  }

  @media screen and (max-width: 959px) {
    img.bg-image.butt-text {
      transform: scale(1.1) translate(0, -10%);
    }

    .action {
      align-self: stretch;
    }
  }

  @media screen and (max-width: 719px) {
    min-height: 560px;

    img.bg-image.butt-text {
      transform: scale(1.3) translate(0, -16%);
    }

    .action {
      align-self: stretch;
    }
  }
`;

export default Main;
