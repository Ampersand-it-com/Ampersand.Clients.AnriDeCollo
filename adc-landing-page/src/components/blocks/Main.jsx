import content from "../../helpers/content";
import { useLocalization } from "../../helpers/localization";
import Button from "../ui/Button";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import { useEffect } from "react";

function Main() {
  const { localized } = useLocalization();

  useEffect(() => {
    console.log(content.main.img1);
  });

  return (
    <section id="main">
      <div className="left">
        <h1>
          {localized("main.title")}
          <em>{localized("main.titleEmp")}</em>
        </h1>
        <div className="col">
          <p>{localized("main.description")}</p>
          <Button>{localized("main.action")}</Button>
        </div>
        <img className="bg" src={content.main.img1} alt="" />
      </div>

      <div className="right">
        <Button>
          {localized("main.details")} <ArrowDown />
        </Button>
        <img className="bg" src={content.main.img2} alt="" />
      </div>
    </section>
  );
}

export default Main;
