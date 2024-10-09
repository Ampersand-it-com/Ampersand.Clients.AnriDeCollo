import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import { sizes } from "../../helpers/styleSetup";

const About = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection>
      <div className="titleBlock">
        <h2>{localized("about.title")}</h2>
        <Button>{localized("about.action")}</Button>
      </div>
      <p className="description h3">{localized("about.description")}</p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: ${sizes.gapM};

  .titleBlock {
    flex-shrink: 0;
    width: calc((100% - ${sizes.gapM} * 2) * 0.333);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: ${sizes.gapM};
  }

  .description::before {
    content: "      ";
  }
`;

export default About;
