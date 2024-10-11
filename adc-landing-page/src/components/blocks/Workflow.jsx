import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import { sizes } from "../../helpers/styleSetup";
import content from "../../helpers/content";

const Workflow = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection>
      <h2>{localized("workflow.title")}</h2>
      <img className="video" src={content.workflow.preview} alt="" />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .video {
    aspect-ratio: 2;
  }
`;

export default Workflow;
