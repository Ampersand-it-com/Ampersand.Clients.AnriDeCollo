import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import { colors, hexa } from "../../helpers/styleSetup";

const Features = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection id="features" className="no-scrollbar">
      <Feature
        title={localized("features.0.title")}
        description={localized("features.0.description")}
      />
      <Feature
        title={localized("features.1.title")}
        description={localized("features.1.description")}
      />
      <Feature
        title={localized("features.2.title")}
        description={localized("features.2.description")}
      />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;

  .feature {
    flex: 1 0 0;
    min-width: 0px;
  }

  @media screen and (max-width: 1199px) {
    overflow-x: auto;

    .feature {
      min-width: 420px;
    }
  }

  @media screen and (max-width: 719px) {
    overflow-x: auto;

    .feature {
      min-width: 300px;
    }
  }
`;

// Feature

const Feature = ({ title, description, ...props }) => (
  <FeatureContainer className="feature" {...props}>
    <h4>{title}</h4>
    <p className="text">{description}</p>
  </FeatureContainer>
);

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--padding-l);
  gap: var(--padding-m);

  background: ${colors.primary};
  color: ${colors.bg};

  p {
    color: ${hexa(colors.bg, 80)};
  }
`;

export default Features;
