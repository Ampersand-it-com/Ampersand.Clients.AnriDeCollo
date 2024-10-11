import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa } from "../../helpers/styleSetup";

const Services = () => {
  const { localized } = useLocalization();

  return (
    <StyledSection>
      <h2>{localized("services.title")}</h2>
      <div className="card">
        <div className="text-block">
          <p className="description h3">{localized("services.description")}</p>
          <p className="caption text">{localized("services.caption")}</p>
        </div>
        <div className="service-cards">
          {content.services.slides.map((slide, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">
                <img src={slide.icon} alt="" />
              </div>
              <h4 className="title">
                {localized("services.slides." + index + ".title")}
              </h4>
              <p className="text">
                {localized("services.slides." + index + ".description")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .card {
    display: flex;
    flex-direction: row;
    padding: 50px;
    gap: 20px;

    background: ${colors.primary};
    color: ${colors.bg};

    .text-block {
      flex: 1 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
    }

    .service-cards {
      flex: 2 0 0;
      display: flex;
      flex-flow: row wrap;
      gap: 20px;
    }

    .service-card {
      flex: 1 0 0;
      min-width: 40%;
      height: 280px;

      display: flex;
      flex-direction: column;
      padding: 30px;
      gap: 8px;

      background: ${colors.bg};
      color: ${colors.main};

      .icon-container {
        width: 44px;
        aspect-ratio: 1;
        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid ${hexa(colors.main, 30)};
      }

      h4 {
        flex: 1 0 0;
      }
    }
  }
`;

export default Services;
