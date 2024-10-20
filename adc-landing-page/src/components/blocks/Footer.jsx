import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors } from "../../helpers/styleSetup";
import LogoFull from "../../assets/svg/logo_full.svg?react";
import StyledLogo from "../parts/Logo";
import { useSectionObserver } from "../../helpers/activeNavigation";
import { smoothScrollTo } from "../../helpers/common";
import FooterForm from "../parts/FooterForm";
import FormFeedback from "../parts/formFeedback";
import { useState } from "react";

const Footer = () => {
  const { localized } = useLocalization();

  const id = "footer";
  const ref = useSectionObserver(id);

  const [formStatus, setFormStatus] = useState("unsent");

  // TODO
  // const handleLinkClick = (href) => {
  //   smoothScrollTo(href);
  // }

  return (
    <StyledFooter id={id} ref={ref}>
      <div className="main">
        <div className="part form">
          <StyledLogo />
          {formStatus == "unsent" ? (
            <FooterForm setStatus={setFormStatus} />
          ) : (
            <FormFeedback
              className="form-feedback"
              status={formStatus}
              action={() => setFormStatus("unsent")}
            />
          )}
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
      width: ${({ theme }) => theme.grid(4)}px;
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

    .form-feedback {
      align-items: flex-start !important;
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

  @media screen and (min-width: 1920px) {
    form {
      width: calc(
        (1920px - var(--padding-xl) * 2 + var(--gap-m) * 2) * 0.333
      ) !important;
    }
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
    .part.form {
      form .row {
        flex-direction: column;
      }
    }

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
