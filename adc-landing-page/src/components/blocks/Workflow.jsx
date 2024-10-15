import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { Gallery, Item } from "react-photoswipe-gallery";
import Button from "../ui/Button";
import Play from "../../assets/icons/play-circle.svg?react";

const Workflow = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection id="workflow">
      <h2>{localized("workflow.title")}</h2>
      <Gallery>
        <Item
          content={
            <IframeWrapper>
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                rel="0"
                allowFullScreen
              />
            </IframeWrapper>
          }
        >
          {({ ref, open }) => (
            <a
              className="main"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                open(e);
              }}
              ref={ref}
            >
              <Button variant="bareInverted">
                <Play className="icon-play" />
              </Button>
              <img src={content.workflow.preview} alt="Video preview" />
            </a>
          )}
        </Item>
      </Gallery>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  & > .main {
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 100%;
      height: 100%;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  @media screen and (max-width: 1199px) {
    .icon-play {
      width: 60px;
      height: auto;
    }
  }
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: var(--padding-xl);

  display: flex;
  pointer-events: none;

  & > * {
    flex: 1 0 0;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    pointer-events: auto;
  }

  @media screen and (max-width: 719px) {
    padding: 0;
    justify-content: center;
    align-items: center;

    & > * {
      width: 100%;
      aspect-ratio: 16/9;
      height: auto;
      pointer-events: auto;
    }
  }
`;

export default Workflow;
