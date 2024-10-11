import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import { sizes } from "../../helpers/styleSetup";
import content from "../../helpers/content";
import Accordion from "../ui/Accordion";

const FAQ = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection>
      <div className="titleBlock">
        <h2>{localized("faq.title")}</h2>
        <Button>{localized("faq.action")}</Button>
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

  .accordions-container {
    flex: 1 0 0;

    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }
`;

export default FAQ;
