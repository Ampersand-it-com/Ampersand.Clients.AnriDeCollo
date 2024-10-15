import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import styled from "styled-components";
import { smoothScrollTo } from "../../helpers/common";
import TitleUkr from "../../assets/svg/title-ukr.svg?react";
import TitleEng from "../../assets/svg/title-eng.svg?react";
import useResponsive from "../../hooks/useResponsive";

function Main() {
  const { locale, localized } = useLocalization();

  const screen = useResponsive();

  const handleButtonClick = (href) => {
    smoothScrollTo(href);
  };

  return (
    <StyledSection id="main">
      <div className="left">
        {locale == "ukr" ? (
          <TitleUkr className="title-svg" />
        ) : (
          <TitleEng className="title-svg" />
        )}
        <h1 className="title">{localized("main.title")}</h1>
        <div className="col">
          <p className="description lead">{localized("main.description")}</p>
          <Button
            className="action"
            onClick={() => handleButtonClick(content.main.action.href)}
          >
            {localized("main.action")}
          </Button>
        </div>
        <img className="bg" src={content.main.img1} alt="" />
      </div>

      {screen !== "mobile" && (
        <div className="right">
          <Button
            variant="bare"
            onClick={() => handleButtonClick(content.main.details.href)}
          >
            {localized("main.details")} <ArrowDown />
          </Button>
          <img className="bg" src={content.main.img2} alt="" />
        </div>
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;

  min-height: 720px;
  height: calc(100vh - 72px);

  & > div {
    position: relative;
    flex: 1 0 0;
    min-width: 0px;
    overflow: hidden;

    padding: var(--padding-xl);
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title-svg {
      width: 100%;
      height: auto;
    }

    .title {
      text-transform: uppercase;
      font-size: var(--title-size);
      position: absolute;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      color: transparent;
    }

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .description {
      text-align: center;
      max-width: 320px;
    }

    .bg {
      object-position: center 90%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
  }

  img.bg {
    position: absolute;
    width: 100%;
    height: 100%;

    inset: 0;
    z-index: -1;
  }

  @media screen and (min-width: 1600px) {
    .left .bg {
      object-position: center 80%;
    }
  }

  @media screen and (max-width: 1199px) {
    height: calc(100vh - 56px);
    min-height: 560px;
  }

  @media screen and (max-width: 719px) {
    .left .bg {
      transform: scale(1.5) translate(0, -15%);
    }

    .action {
      align-self: stretch;
    }
  }
`;

export default Main;
