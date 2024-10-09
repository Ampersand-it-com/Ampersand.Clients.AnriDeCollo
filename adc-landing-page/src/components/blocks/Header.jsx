import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import Button from "../ui/Button";
import styled from "styled-components";
import { colors } from "../../helpers/styleSetup";
import Logo from "../parts/logo";
import Tabs from "../ui/Tabs";
import Tab from "../ui/Tab";
import Switch from "../ui/Switch";

function Header() {
  const { locale, setLocale, localized } = useLocalization();

  return (
    <StyledHeader>
      <div className="left">
        <Logo />
      </div>

      {/* <nav className="middle">
        {content.header.navigation.map((el, index) => (
          <a href={el.href} key={index}>
            {localized("header.navigation." + index)}
          </a>
        ))}
      </nav> */}

      <Tabs>
        {content.header.navigation.map((el, index) => (
          <Tab href={el.href} key={index}>
            {localized("header.navigation." + index)}
          </Tab>
        ))}
      </Tabs>

      <div className="right">
        <Switch
          active={locale}
          setActive={setLocale}
          options={[
            { label: localized("header.locale.ukr"), value: "ukr" },
            { label: localized("header.locale.eng"), value: "eng" },
          ]}
        />
        <Button>{localized("header.action")}</Button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;

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
`;

export default Header;
