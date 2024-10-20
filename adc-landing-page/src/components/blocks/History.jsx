import styled from "styled-components";
import { useLocalization } from "../../helpers/localization";
import content from "../../helpers/content";
import { colors, hexa, sizes } from "../../helpers/styleSetup";
import HistorySlider from "../parts/HistorySlider";
import Button from "../ui/Button";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../../assets/icons";

const History = () => {
  const { localized } = useLocalization();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <StyledSection id="history">
      <div className="card">
        <div className="textBlock">
          <div className="title-block">
            <h3>{localized("history.title")}</h3>
            <div slot="container-start" className="arrows">
              <Button
                variant="borderInverted"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="borderInverted"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
          <HistorySlider
            setIsBeginning={setIsBeginning}
            setIsEnd={setIsEnd}
            swiperRef={swiperRef}
          >
            {content.history.slides.map((slide, index) => (
              <p key={index} className="description text">
                {localized("history.slides." + index)}
              </p>
            ))}
          </HistorySlider>
        </div>
        <div className="imageBlock">
          <img src={content.history.img} alt="" />
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .card {
    display: flex;
    flex-direction: row;
    gap: var(--gap-m);
    padding: var(--padding-xl);

    background: ${colors.primary};
    color: ${colors.bg};
  }

  .textBlock {
    /* flex: 1 0 0;
    min-width: 0px; */
    width: ${({ theme }) => theme.grid(4) - theme.padding("xl")}px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--gap-m);
  }

  .title-block {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .arrows {
      display: flex;
      flex-direction: row;
      gap: var(--gap-xs);
    }
  }

  .imageBlock {
    flex: 2 0 0;
    min-width: 0px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1199px) {
    .card {
      flex-direction: column;
    }

    .textBlock {
      width: initial;
    }

    .title-block {
      flex-direction: row;
    }
  }

  @media screen and (max-width: 719px) {
    padding: 0px !important;
    margin: var(--padding-xl) 0;
  }
`;

export default History;
