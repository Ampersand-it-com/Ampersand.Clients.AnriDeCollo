import { useRef, useState } from "react";

import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa } from "../../helpers/styleSetup";

import Button from "../ui/Button";

import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import Quotes from "../../assets/icons/quotes.svg?react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import useResponsive from "../../hooks/useResponsive";
import { useSectionObserver } from "../../helpers/activeNavigation";

const Reviews = () => {
  const { localized } = useLocalization();
  const screen = useResponsive();

  const id = "reviews";
  const ref = useSectionObserver(id);

  const swiperRef = useRef(null);

  return (
    <StyledSection id={id} ref={ref}>
      <div className="title-block">
        <h2>{localized("reviews.title")}</h2>
        <div className="arrows">
          <Button
            variant="border"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="border"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Swiper
        className="slider"
        {...sliderConfig}
        slidesPerView={screen === "mobile" ? 1 : screen === "tablet" ? 2 : 3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {content.reviews.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Review
              img={slide.img}
              name={localized("reviews.slides." + index + ".name")}
              role={localized("reviews.slides." + index + ".role")}
              review={localized("reviews.slides." + index + ".review")}
            />
          </SwiperSlide>
        ))}

        <div slot="container-end" className="pagination"></div>
      </Swiper>
    </StyledSection>
  );
};

// Slider config

const sliderConfig = {
  modules: [Navigation, Autoplay],
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
};

// Style

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

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

    .swiper-wrapper {
      display: flex !important;
      align-items: stretch;
    }

    .swiper-slide {
      height: initial;
      display: flex;
    }
  }

  @media screen and (max-width: 1199px) {
    /* .slider {
      align-self: flex-start;
      width: calc(100% - 40px);
      margin-right: 40px !important;
    } */
  }
`;

// Review

const Review = ({ img, name, role, review }) => (
  <ReviewContainer>
    <div className="main">
      <div className="icon-container">
        <Quotes />
      </div>
      <p className="text review">{review}</p>
    </div>
    <div className="footer">
      <img src={img} alt="Customer photo" />
      <div className="text-block">
        <h4>{name}</h4>
        <p className="text review">{role}</p>
      </div>
    </div>
  </ReviewContainer>
);

const ReviewContainer = styled.div`
  min-height: 280px;
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;
  padding: var(--padding-m);
  gap: var(--gap-m);

  background: ${colors.tile};

  & > .main {
    flex: 1 0 0;

    display: flex;
    flex-direction: row;
    gap: var(--gap-m);

    .icon-container {
      color: ${colors.primary};
    }
  }

  & > .footer {
    display: flex;
    flex-direction: row;
    gap: var(--gap-m);
    align-items: center;

    img {
      border-radius: 666px;
    }
  }

  .icon-container,
  img {
    flex-shrink: 0;
    width: 60px;
    aspect-ratio: 1;
  }

  .review,
  .role {
    color: ${hexa(colors.main, 60)};
  }
`;

export default Reviews;
