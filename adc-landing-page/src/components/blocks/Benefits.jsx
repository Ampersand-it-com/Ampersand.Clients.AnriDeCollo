import { useRef, useState } from "react";

import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa } from "../../helpers/styleSetup";

import Button from "../ui/Button";

import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import useResponsive from "../../hooks/useResponsive";

const Benefits = () => {
  const { localized } = useLocalization();

  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const screen = useResponsive();

  return (
    <StyledSection id="benefits">
      <div className="title-block">
        <h2>{localized("benefits.title")}</h2>
        <div className="arrows">
          <Button
            variant="border"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="border"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Swiper
        className="slider"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={screen === "mobile" ? 1 : screen === "tablet" ? 2 : 4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {content.benefits.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Benefit
              index={index + 1}
              title={localized("benefits.slides." + index + ".title")}
              description={localized(
                "benefits.slides." + index + ".description"
              )}
            />
          </SwiperSlide>
        ))}

        <div slot="container-end" className="pagination"></div>
      </Swiper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--padding-m);

  .title-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .arrows {
    display: flex;
    flex-direction: row;
    gap: var(--gap-xs);
  }

  .slider {
    width: 100%;
    overflow: visible;
  }

  @media screen and (max-width: 1199px) {
    /* .slider {
      align-self: flex-start;
      width: calc(100% - 40px);
      margin-right: 40px !important;
    } */
  }
`;

// Benefit

const Benefit = ({ index, title, description }) => (
  <BenefitContainer>
    <p className="index">({String(index).padStart(2, "0")})</p>
    <h4>{title}</h4>
    <p className="text">{description}</p>
  </BenefitContainer>
);

const BenefitContainer = styled.div`
  height: 324px;

  display: flex;
  flex-direction: column;
  padding: var(--padding-m);
  gap: var(--gap-m);

  background: ${colors.tile};

  .index {
    font-family: "NyghtSerif";
    color: ${hexa(colors.main, 50)};
  }

  h4 {
    flex: 1 0 0;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export default Benefits;
