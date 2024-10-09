import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa, sizes } from "../../helpers/styleSetup";
import HistorySlider from "../parts/historySlider";

const History = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection>
      <div className="textBlock">
        <h3>{localized("history.title")}</h3>
        <HistorySlider>
          {content.history.slides.map((slide, index) => (
            <p key={index} className="description text">
              {localized("history.slides." + index)}
            </p>
          ))}
        </HistorySlider>
      </div>
      <div className="imageBlock">
        <img src={content.history.img} alt="" />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  --padding: ${sizes.paddingL};

  display: flex;
  flex-direction: row;
  gap: ${sizes.gapM};
  padding: ${sizes.paddingL};

  background: ${colors.primary};
  color: ${colors.bg};

  .textBlock {
    flex: 1 0 0;
    min-width: 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .imageBlock {
    flex: 2 0 0;
    min-width: 0px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default History;
