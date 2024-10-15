import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import { colors, hexa } from "../../helpers/styleSetup";
import styled from "styled-components";
import authData from "../../../authData";
import FormFeedback from "../parts/formFeedback";
import ContactForm from "../parts/ContactForm";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";

function Contact() {
  const { localized } = useLocalization();
  const screen = useResponsive();

  const [formStatus, setFormStatus] = useState("unsent");

  return (
    <StyledSection id="contact">
      <div className="card">
        <div className="header">
          <h3>{localized("contact.title")}</h3>
          <p>{localized("contact.description")}</p>
        </div>
        <div className="main">
          <div className="caption-block">
            <p className="caption">{localized("contact.caption")}</p>
            <p className="Email h4">{localized("contact.email")}</p>
          </div>
          {formStatus == "unsent" ? (
            <ContactForm setStatus={setFormStatus} />
          ) : (
            <FormFeedback
              className="form-feedback"
              status={formStatus}
              action={() => setFormStatus("unsent")}
            />
          )}
        </div>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  .card {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    padding: var(--padding-xl);

    color: ${colors.bg};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      background: ${colors.primary};
      z-index: -1;
      mix-blend-mode: normal;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      background: url(${content.contact.img}) no-repeat center / cover;
      z-index: -2;
      mix-blend-mode: normal;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    & > .main {
      display: flex;
      flex-direction: row;
      gap: 20px;

      & > * {
        flex: 1 0 0;
      }
    }
  }

  .caption-block {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);
    justify-content: end;
  }

  .form-feedback {
    padding: 50px;
    min-height: 360px;
  }

  @media screen and (max-width: 1199px) {
    .card > .main {
      flex-direction: column-reverse;
      gap: 32px;
    }
  }

  @media screen and (max-width: 1199px) {
    .card {
      margin: 0 calc(0px - var(--padding-xl));
    }
  }
`;

export default Contact;
