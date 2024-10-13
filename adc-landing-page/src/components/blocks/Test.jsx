import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import Gallery from "../parts/Gallery";
import MyGallery from "../parts/PhotoSwipe";

const Test = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection>
      <h2>{localized("workflow.title")}</h2>
      <div className="gallery-wrapper">
        <MyGallery />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .gallery-wrapper {
    width: 50%;
    display: flex;
    flex-direction: row;

    & > * {
      flex: 1 0 0;
      min-width: 0px;
      aspect-ratio: 1;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        width: 100%;
      }
    }
  }

  .lg-react-element {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Test;
