import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";
import { Item } from "react-photoswipe-gallery";
import { useEffect, useState } from "react";

const Product = ({ img, text, children, ...props }) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setImageDimensions({
        width: image.width,
        height: image.height,
      });
    };
  }, []);

  return (
    <ProductContainer {...props}>
      <div className="main">
        <div className="img-wrapper">
          <Item
            original={img}
            thumbnail={img}
            width={imageDimensions.width}
            height={imageDimensions.height}
            caption={text}
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={img} alt={text} />
            )}
          </Item>
        </div>
        <p className="lead">{text}</p>
      </div>
      {children && <div className="additional">{children}</div>}
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .main {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .img-wrapper {
      aspect-ratio: 0.7;
      position: relative;
      background: ${hexa(colors.main, 4)};
      cursor: zoom-in;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        /* position: absolute; */
        top: calc(50%);
        width: 100%;
        height: auto;

        mix-blend-mode: multiply;
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .additional {
    padding-bottom: 50px;
  }
`;

export default Product;
