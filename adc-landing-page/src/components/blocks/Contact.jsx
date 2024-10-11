import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import { colors, hexa } from "../../helpers/styleSetup";
import Button from "../ui/Button";
import styled from "styled-components";
import Input from "../ui/Input";
import TextArea from "../ui/Textarea";

function Contact() {
  const { localized } = useLocalization();

  return (
    <StyledSection id="contact">
      <div className="header">
        <h3>{localized("contact.title")}</h3>
        <p>{localized("contact.description")}</p>
      </div>
      <div className="main">
        <div className="caption-block">
          <p className="caption">{localized("contact.caption")}</p>
          <p className="Email h4">{localized("contact.email")}</p>
        </div>
        <form>
          <div className="row">
            <Input placeholder={localized("contact.form.name")} />
            <Input placeholder={localized("contact.form.surname")} />
          </div>
          <Input placeholder={localized("contact.form.email")} />
          <TextArea placeholder={localized("contact.form.message")} />
          <Button variant="inverted" type="submit">
            {localized("contact.form.action")}
          </Button>
        </form>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;

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

  .caption-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: end;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .row {
      display: flex;
      flex-direction: row;
      gap: 20px;

      & > * {
        flex: 1 0 0;
      }
    }
  }
`;

export default Contact;
