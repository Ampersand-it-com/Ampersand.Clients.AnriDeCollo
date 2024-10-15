import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

const RawHistorySlider = ({
  setIsBeginning,
  setIsEnd,
  className,
  children,
  swiperRef,
  ...props
}) => {
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

  .description {
    width: 100%;
    height: 7lh;
    color: ${hexa(colors.bg, 80)};
  }

  .pagination {
    display: flex;
    flex-direction: row;
    gap: var(--gap-xs);
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

  @media screen and (max-width: 1199px) {
    .description {
      height: 4lh;
    }
  }

  @media screen and (max-width: 719px) {
    .description {
      height: 8lh;
    }
  }
`;

export default HistorySlider;
