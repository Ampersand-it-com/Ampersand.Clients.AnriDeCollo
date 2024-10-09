import { useRef, useState } from "react";

import Button from "../ui/Button";
import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

const RawHistorySlider = ({ className, children, ...props }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Swiper
      className={"slider " + className}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        el: ".pagination",
        type: "bullets",
        clickable: false,
        bulletElement: "div",
        bulletClass: "bullet",
        bulletActiveClass: "active",
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      {...props}
    >
      <div slot="container-start" className="arrows">
        <Button
          variant="borderInverted"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="borderInverted"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
        >
          <ArrowRight />
        </Button>
      </div>

      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}

      <div slot="container-end" className="pagination"></div>
    </Swiper>
  );
};

const HistorySlider = styled(RawHistorySlider)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);

  .swiper-slide {
    /* position: relative; */
  }

  .arrows {
    display: flex;
    flex-direction: row;
    gap: var(--gap-s);
  }

  .description {
    width: 100%;
    height: 7lh;
    color: ${hexa(colors.bg, 80)};
  }

  .pagination {
    display: flex;
    flex-direction: row;
    gap: var(--gap-s);
  }

  .bullet {
    flex: 1 0 0;
    height: 2px;
    background: ${hexa(colors.bg, 30)};
    transition: background 0.4s ease;

    &.active {
      background: ${colors.bg};
    }
  }
`;

export default HistorySlider;
