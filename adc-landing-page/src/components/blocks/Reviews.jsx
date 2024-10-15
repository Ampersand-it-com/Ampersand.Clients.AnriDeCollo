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
import { Navigation } from "swiper/modules";
import "swiper/css";
import useResponsive from "../../hooks/useResponsive";

const Reviews = () => {
  const { localized } = useLocalization();
  const screen = useResponsive();

  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <StyledSection id="reviews">
      <div className="title-block">
        <h2>{localized("reviews.title")}</h2>
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
        slidesPerView={screen === "mobile" ? 1 : screen === "tablet" ? 2 : 3}
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

// Benefit

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
  display: flex;
  flex-direction: column;
  padding: var(--padding-m);
  gap: var(--gap-m);

  background: ${colors.tile};

  & > .main {
    display: flex;
    flex-direction: row;
    gap: var(--gap-m);
    min-height: 5lh;

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
