import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import content from "../../helpers/content";
import Accordion from "../ui/Accordion";
import { smoothScrollTo } from "../../helpers/common";
import { useSectionObserver } from "../../helpers/activeNavigation";

const FAQ = () => {
  const { localized } = useLocalization();

  const id = "faq";
  const ref = useSectionObserver(id);

  const handleActionClick = () => {
    smoothScrollTo(content.faq.action.href);
  };

  return (
    <StyledSection id={id} ref={ref}>
      <div className="titleBlock">
        <h2>{localized("faq.title")}</h2>
        <Button onClick={handleActionClick}>{localized("faq.action")}</Button>
      </div>
      <div className="accordions-container">
        {content.faq.items.map((item, index) => (
          <Accordion
            key={index}
            index={index + 1}
            title={localized("faq.items." + index + ".title")}
          >
            <p className="text">
              {localized("faq.items." + index + ".description")}
            </p>
          </Accordion>
        ))}
      </div>
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

  .accordions-container {
    flex: 1 0 0;

    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }

  @media screen and (max-width: 1199px) {
    flex-direction: column;

    .titleBlock {
      width: initial;
      flex-direction: row;
      align-items: center;
    }
  }

  .accordions-container {
    padding-top: 0;
  }
`;

export default FAQ;
