import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import Button from "../ui/Button";
import styled from "styled-components";
import { colors } from "../../helpers/styleSetup";
import Logo from "../parts/Logo";
import Tabs from "../ui/Tabs";
import Tab from "../ui/Tab";
import Switch from "../ui/Switch";
import { smoothScrollTo } from "../../helpers/common";
import useResponsive from "../../hooks/useResponsive";
import { Menu } from "../../assets/icons";

function Header() {
  const { locale, setLocale, localized } = useLocalization();
  const screen = useResponsive();

  const handleTabClick = (e, href) => {
    e.preventDefault;
    smoothScrollTo(href);
  };

  return (
    <StyledHeader>
      <div className="left">
        <Logo />
      </div>

      {(screen === "desktop" || screen === "ultrawide") && (
        <Tabs>
          {content.header.navigation.map((el, index) => (
            <Tab onClick={(e) => handleTabClick(e, el.href)} key={index}>
              {localized("header.navigation." + index)}
            </Tab>
          ))}
        </Tabs>
      )}

      {screen === "desktop" || screen === "ultrawide" ? (
        <div className="right">
          <Switch
            active={locale}
            setActive={setLocale}
            options={[
              { label: localized("header.locale.ukr"), value: "ukr" },
              { label: localized("header.locale.eng"), value: "eng" },
            ]}
          />
          <Button
            onClick={(e) => handleTabClick(e, content.header.action.href)}
          >
            {localized("header.action")}
          </Button>
        </div>
      ) : (
        <div className="right">
          <Button variant="bare">
            <Menu />
          </Button>
        </div>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 var(--padding-xl);

  background: ${colors.bg};

  & > *:first-child,
  & > *:last-child {
    flex: 1 0 0;

    display: flex;
    flex-direction: row;
  }

  & > *:last-child {
    justify-content: flex-end;
  }

  & > .right {
    justify-content: flex-end;
    gap: 32px;
  }

  @media screen and (max-width: 1199px) {
    height: 56px;

    .logo {
      font-size: 32px;
    }
  }
`;

export default Header;
