import { Gallery } from "react-photoswipe-gallery";
import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import { colors, hexa } from "../../helpers/styleSetup";
import Button from "../ui/Button";
import styled from "styled-components";
import Product from "../parts/Product";
import { download, openInNewTab } from "../../helpers/common";
import useResponsive from "../../hooks/useResponsive";
import { useSectionObserver } from "../../helpers/activeNavigation";

function Products() {
  const { localized } = useLocalization();
  const screen = useResponsive();

  const id = "products";
  const ref = useSectionObserver(id);

  // const handleActionClick = (url, previewUrl) => {
  //   // download(url, "catalog");
  //   openInNewTab(previewUrl);
  // };

  return (
    <StyledSection id={id} ref={ref}>
      <div className="title-block">
        <h2>{localized("products.title")}</h2>
        <div className="caption-block">
          <span className="lead caption">{localized("products.caption")}</span>
          <a href={"mailto: " + content.products.email} className="lead email">
            {localized("products.email")}
          </a>
        </div>
      </div>
      {/* {screen === "tablet" && (
        <Button
          className="mobile-action"
          onClick={(e) =>
            handleActionClick(
              content.products.action.href,
              content.products.action.previewUrl
            )
          }
        >
          {localized("products.action")}
        </Button>
      )} */}
      <div className="products-container no-scrollbar">
        <Gallery
          withCaption
          options={{
            bgOpacity: 0.8,
          }}
        >
          {content.products.slides.map((product, index) => (
            <Product
              img={product.img}
              text={localized("products.slides." + index + ".caption")}
              key={index}
            >
              {/* {index == 0 &&
                (screen === "desktop" || screen === "ultrawide") && (
                  <Button
                    onClick={(e) =>
                      handleActionClick(
                        content.products.action.href,
                        content.products.action.previewUrl
                      )
                    }
                  >
                    {localized("products.action")}
                  </Button>
                )} */}
            </Product>
          ))}
        </Gallery>
      </div>
      {/* {screen === "mobile" && (
        <Button
          className="mobile-action"
          onClick={(e) =>
            handleActionClick(
              content.products.action.href,
              content.products.action.previewUrl
            )
          }
        >
          {localized("products.action")}
        </Button>
      )} */}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

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
    gap: var(--gap-xs);

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
    gap: var(--gap-m);

    & > * {
      flex: 1 0 0;
      min-width: 30%;

      @media screen and (min-width: 1200px) {
        &:nth-child(1) {
          min-width: 40%;

          .main {
            align-self: flex-start;
            /* width: calc((100vw - (100px + 3 * 20px)) * 0.25); */
            width: ${({ theme }) => theme.grid(4)}px;
          }

          .img-wrapper {
            aspect-ratio: 1;
          }
        }

        &:nth-child(2) {
          min-width: 40%;

          .img-wrapper {
            aspect-ratio: 1;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .mobile-action {
      align-self: flex-start;
    }

    .products-container {
      margin: 0 calc(0px - var(--padding-xl));
      padding: 0 var(--padding-xl);
      flex-wrap: nowrap;
      overflow-x: auto;

      & > * {
        min-width: 400px;
      }
    }
  }

  @media screen and (max-width: 719px) {
    .mobile-action {
      align-self: unset;
    }

    .title-block {
      flex-direction: column;
      align-items: stretch;
      gap: var(--gap-m);
    }

    .caption-block {
      align-items: start;
    }

    .products-container {
      & > * {
        min-width: 300px;
      }
    }
  }
`;

export default Products;
