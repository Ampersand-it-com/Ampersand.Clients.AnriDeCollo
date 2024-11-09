import { useLocalization } from "../../helpers/localization";
import styled from "styled-components";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../helpers/styleSetup";
import content from "../../helpers/content";
import { CheckmarkCircle, CloseCircle } from "../../assets/icons";

function WhyUs() {
  const { localized } = useLocalization();

  const id = "why-us";

  return (
    <StyledSection id={id}>
      <h2>{localized("whyUs.title")}</h2>
      <div className="row">
        <Tile>
          <h3>{localized("whyUs.pros.title")}</h3>
          <List>
            {content.whyUs.pros.list.map((el, index) => (
              <ListItem key={index}>
                <CheckmarkCircle />
                <p>{localized("whyUs.pros.list." + index)}</p>
              </ListItem>
            ))}
          </List>
        </Tile>

        <Tile>
          <h3>{localized("whyUs.cons.title")}</h3>
          <List>
            {content.whyUs.cons.list.map((el, index) => (
              <ListItem key={index}>
                <CloseCircle />
                <p>{localized("whyUs.cons.list." + index)}</p>
              </ListItem>
            ))}
          </List>
        </Tile>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);

  background: ${colors.tile};

  h2,
  h3 {
    text-align: center;
  }

  .row {
    margin: calc(0px - var(--padding-xl));
    padding: var(--padding-xl);

    display: flex;
    flex-direction: row;
    gap: var(--gap-m);
    overflow-x: auto;

    & > * {
      flex: 1 0 0;
      min-width: 300px;
    }
  }
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl);
  gap: var(--gap-l);

  background: ${colors.bg};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: var(--gap-xs);
  align-items: flex-start;

  svg,
  .icon {
    flex-shrink: 0;
  }

  p {
    padding: 2px 0;
  }
`;

export default WhyUs;
