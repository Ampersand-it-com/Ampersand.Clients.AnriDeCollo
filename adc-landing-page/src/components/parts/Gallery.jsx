import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallery({ img, ...props }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      mode="lg-zoom-in"
      zoom={{
        scale: 1, // Начальный масштаб при открытии изображения
        maxScale: 3, // Максимальный зум
        enable: true, // Включает зум
        showZoomInOutIcons: true, // Показывает иконки зума
      }}
      openEffect="zoom"
      {...props}
    >
      <a href={img} data-lg-size="300-300">
        <img alt="img1" src={img} data-lg-size="1600-2400" />
      </a>
    </LightGallery>
  );
}

export default Gallery;
