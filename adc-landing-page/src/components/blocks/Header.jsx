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
import { Close, Menu } from "../../assets/icons";
import { useRef, useState } from "react";

const HeaderWrapper = styled.div`
  position: relative;
  height: 72px;
`;

function Header() {
  const screen = useResponsive();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setMenuIsOpen(menuIsOpen ? false : true);
  };

  // const menuRef = useRef(null);
  // const handleMenuClick = (e) => {
  //   if (menuRef.current && e.target === menuRef.current) {
  //     return;
  //   } else setMenuIsOpen(false);
  //   // if (menuRef.current && !menuRef.current.contains(e.target)) {
  //   //   setMenuIsOpen(false); // Закрываем меню при клике вне
  //   // }
  // };

  const handleTabClick = (e, href) => {
    e.preventDefault;
    setMenuIsOpen(false);
    smoothScrollTo(href);
  };

  return (
    <StyledHeader>
      <div className="header">
        <div className="left">
          <Logo onClick={(e) => handleTabClick(e, "#main")} />
        </div>

        {screen === "desktop" || screen === "ultrawide" ? (
          <HeaderContent handleTabClick={handleTabClick} />
        ) : (
          <div className="right">
            <Button variant="bare" onClick={handleMenuButtonClick}>
              {menuIsOpen ? <Close /> : <Menu />}
            </Button>
          </div>
        )}
      </div>
      {(screen === "mobile" || screen === "tablet") && (
        <HeaderMenu $isOpen={menuIsOpen}>
          <HeaderContent handleTabClick={handleTabClick} />
        </HeaderMenu>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 16;

  background: ${colors.bg};

  .header {
    height: 72px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 var(--padding-xl);

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
  }

  @media screen and (max-width: 1199px) {
    .header {
      height: 56px;
    }

    .logo {
      font-size: 32px;
    }
  }
`;

// Header Content

const HeaderContent = ({ handleTabClick }) => {
  const { locale, setLocale, localized } = useLocalization();

  return (
    <>
      <Tabs className="tabs">
        {content.header.navigation.map((el, index) => (
          <Tab
            onClick={(e) => handleTabClick(e, el.href)}
            href={el.href}
            key={index}
          >
            {localized("header.navigation." + index)}
          </Tab>
        ))}
      </Tabs>
      <div className="right">
        <Switch
          className={"switch"}
          active={locale}
          setActive={setLocale}
          options={[
            { label: localized("header.locale.ukr"), value: "ukr" },
            { label: localized("header.locale.eng"), value: "eng" },
          ]}
        />
        <Button
          className="action"
          onClick={(e) => handleTabClick(e, content.header.action.href)}
        >
          {localized("header.action")}
        </Button>
      </div>
    </>
  );
};

// Header Menu

const HeaderMenu = styled.div`
  position: absolute;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? `512px` : "0")};
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background: ${colors.bg};
  transition: max-height 0.5s ease;

  .tabs {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }

  .tab::before {
    display: none;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);
  }

  .action {
    margin: 16px;
  }
`;

export default Header;
