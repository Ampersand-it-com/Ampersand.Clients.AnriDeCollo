import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa } from "../../helpers/styleSetup";
import LogoFull from "../../assets/icons/logo_full.svg?react";
import StyledLogo from "../parts/logo";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Footer = () => {
  const { localized } = useLocalization();

  return (
    <StyledFooter>
      <div className="main">
        <div className="part form">
          <StyledLogo />
          <form>
            <h4>{localized("footer.form.cta")}</h4>
            <div className="row">
              <Input placeholder={localized("footer.form.input")} />
              <Button variant="inverted">
                {localized("footer.form.action")}
              </Button>
            </div>
          </form>
        </div>
        <div className="part info">
          <p className="h4">{localized("about.description")}</p>
          <div className="row">
            {content.footer.info.map((col, i) => (
              <div className="col" key={i}>
                {col.map((el, j) =>
                  j == 0 ? (
                    <h5 key={j}>{localized("footer.info." + i + "." + j)}</h5>
                  ) : (
                    <a key={j} href={el.href}>
                      {localized("footer.info." + i + "." + j)}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogoFull className="logo-full" />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 100px;

  background: ${colors.main};
  color: ${colors.bg};

  & > .main {
    display: flex;
    flex-direction: row;
  }

  .part {
    flex: 1 0 0;
  }

  .part.form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 50px;
    align-items: start;

    form {
      width: calc((100vw - 50px * 2 + 20px * 2) * 0.333);
      display: flex;
      flex-direction: column;
      gap: 20px;

      .row {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }

      .input {
        flex: 1 0 0;
      }
    }
  }

  .part.info {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .row {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-between;
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 16px;

      h5 {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  .logo-full {
    width: 100%;
    height: auto;
  }
`;

export default Footer;
