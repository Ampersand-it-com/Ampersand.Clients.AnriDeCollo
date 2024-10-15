import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa } from "../../helpers/styleSetup";
import LogoFull from "../../assets/svg/logo_full.svg?react";
import StyledLogo from "../parts/Logo";
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
          <p className="h4 description">{localized("about.description")}</p>
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
  padding: var(--padding-xl);
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
    gap: var(--gap-m);
    padding-bottom: var(--padding-xl);
    align-items: start;

    form {
      width: calc((100vw - 50px * 2 + 20px * 2) * 0.333);
      display: flex;
      flex-direction: column;
      gap: var(--gap-m);

      .row {
        display: flex;
        flex-direction: row;
        gap: var(--gap-m);
      }

      .input {
        flex: 1 0 0;
      }
    }
  }

  .part.info {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xl);

    .row {
      display: flex;
      flex-direction: row;
      gap: var(--gap-m);
      justify-content: space-between;
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: var(--gap-s);

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

  @media screen and (max-width: 1199px) {
    gap: 50px;

    & > .main {
      flex-direction: column;
      gap: 32px;
    }

    .part.info {
      gap: 32px;
    }

    form {
      width: 100% !important;
    }

    .description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 719px) {
    .part.info {
      .row {
        flex-direction: column;
        gap: 32px;
      }

      .col {
        flex-flow: row wrap;

        & > *:first-child {
          min-width: 100%;
        }
      }
    }

    .description {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export default Footer;
