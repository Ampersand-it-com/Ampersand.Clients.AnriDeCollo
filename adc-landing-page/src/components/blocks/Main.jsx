import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import styled from "styled-components";
import { sizes } from "../../helpers/styleSetup";

function Main() {
  const { localized } = useLocalization();

  return (
    <StyledSection id="main">
      <div className="left">
        <h1 className="title">
          {localized("main.title")}
          <em>{localized("main.titleEmp")}</em>
          {localized("main.titleEnd")}
        </h1>
        <div className="col">
          <p className="description lead">{localized("main.description")}</p>
          <Button>{localized("main.action")}</Button>
        </div>
        <img className="bg" src={content.main.img1} alt="" />
      </div>

      <div className="right">
        <Button variant="bare">
          {localized("main.details")} <ArrowDown />
        </Button>
        <img className="bg" src={content.main.img2} alt="" />
      </div>
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

    padding: ${sizes.paddingL};
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      --title-size: calc((100vw - 200px) * 0.0375);

      /* text-align: center; */
      text-transform: uppercase;
      font-size: var(--title-size);

      em {
        position: relative;
        top: var(--title-size);
      }
    }

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .description {
      text-align: center;
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
`;

export default Main;
