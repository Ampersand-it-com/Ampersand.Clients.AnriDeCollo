import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import Button from "../ui/Button";

function Header() {
  const { localized } = useLocalization();

  return (
    <header>
      <div className="left">
        <div className="logo">{localized("header.logo")}</div>
      </div>

      <nav className="middle">
        {content.header.navigation.map((el, index) => (
          <a href={el.href} key={index}>
            {localized("header.navigation." + index)}
          </a>
        ))}
      </nav>

      <div className="right">
        <Button>{localized("header.action")}</Button>
      </div>
    </header>
  );
}

export default Header;
