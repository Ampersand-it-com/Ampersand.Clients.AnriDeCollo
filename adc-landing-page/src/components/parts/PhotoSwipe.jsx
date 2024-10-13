import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import content from "../../helpers/content";

const MyGallery = () => (
  <Gallery>
    <div className="item-wrapper">
      <Item
        original={content.products.slides[0].img}
        thumbnail={content.products.slides[0].img}
        width="2731"
        height="4096"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={content.products.slides[0].img} />
        )}
      </Item>
    </div>
    <div className="item-wrapper">
      <Item
        original={content.products.slides[1].img}
        thumbnail={content.products.slides[1].img}
        width="2731"
        height="4096"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={content.products.slides[1].img} />
        )}
      </Item>
    </div>
  </Gallery>
);

export default MyGallery;
