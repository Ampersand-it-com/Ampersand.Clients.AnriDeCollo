const MainSlider = () => {
  return (
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
      creativeEffect={effect1}
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
  );
};

const effect1 = {
  prev: {
    shadow: false,
    scale: 0.9,
  },
  next: {
    translate: ["108%", 0, 0],
  },
};

export default MainSlider;
