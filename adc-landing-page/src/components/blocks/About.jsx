import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import { sizes } from "../../helpers/styleSetup";
import { smoothScrollTo } from "../../helpers/common";
import content from "../../helpers/content";
import { useSectionObserver } from "../../helpers/activeNavigation";

const About = () => {
  const { localized } = useLocalization();

  const id = "about";
  const ref = useSectionObserver(id);

  const handleActionClick = () => {
    smoothScrollTo(content.about.action.href);
  };

  return (
    <StyledSection id={id} ref={ref}>
      <div className="titleBlock">
        <h2>{localized("about.title")}</h2>
        <Button onClick={handleActionClick}>{localized("about.action")}</Button>
      </div>
      <p className="h3 description">{localized("about.description")}</p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: var(--gap-m);

  .titleBlock {
    flex-shrink: 0;
    width: calc((100% - var(--gap-m) * 2) * 0.333);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: var(--gap-m);
  }

  .description::before {
    content: "      ";
  }

  @media screen and (max-width: 1199px) {
    flex-direction: column;

    .titleBlock {
      flex-direction: row;
      width: unset;
    }

    .description {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 1199px) {
    .description {
      font-size: 20px;
    }
  }
`;

export default About;
