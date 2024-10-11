import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import { colors, hexa } from "../../helpers/styleSetup";
import Button from "../ui/Button";
import styled from "styled-components";

function Products() {
  const { localized } = useLocalization();

  return (
    <StyledSection id="products">
      <div className="title-block">
        <h2>{localized("products.title")}</h2>
        <div className="caption-block">
          <span className="lead caption">{localized("products.caption")}</span>
          <a href={"mailto: " + content.products.email} className="lead email">
            {localized("products.email")}
          </a>
        </div>
      </div>
      <div className="products-container">
        {content.products.slides.map((product, index) => (
          <Product
            img={product.img}
            text={localized("products.slides." + index + ".caption")}
            key={index}
          >
            {index == 0 && <Button>{localized("products.action")}</Button>}
          </Product>
        ))}
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .caption-block {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;

    .caption {
      color: ${hexa(colors.main, 80)};
    }

    .email {
      font-weight: 500;
    }
  }

  .products-container {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    & > * {
      flex: 1 0 0;
      min-width: 30%;

      &:nth-child(1) {
        min-width: 40%;

        .main {
          align-self: flex-start;
          width: calc((100vw - (100px + 3 * 20px)) * 0.25);
        }
      }

      &:nth-child(2) {
        min-width: 40%;

        .main {
          flex: 1 0 0;
        }

        img {
          height: auto;
          flex: 1 0 0;
          min-height: 0px;
        }
      }
    }
  }
`;

// Product

const Product = ({ img, text, children, ...props }) => (
  <ProductContainer {...props}>
    <div className="main">
      <img src={img} alt={text} />
      <p className="lead">{text}</p>
    </div>
    {children && <div className="additional">{children}</div>}
  </ProductContainer>
);

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .main {
    display: flex;
    flex-direction: column;
    gap: 12px;

    img {
      aspect-ratio: 1;
    }
  }

  .additional {
    padding-bottom: 50px;
  }
`;

export default Products;
