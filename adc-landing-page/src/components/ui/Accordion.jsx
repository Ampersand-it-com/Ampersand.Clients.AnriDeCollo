import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ArrowDown from "../../assets/icons/chevron-down.svg?react";
import Index from "./Index";
import { colors, hexa } from "../../helpers/styleSetup";

const Accordion = ({ index = 0, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]); // обновляем высоту при открытии/закрытии

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggleAccordion}>
        <Index index={index} />
        <h3>{title}</h3>
        <IconWrapper $isOpen={isOpen}>
          <ArrowDown />
        </IconWrapper>
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen} $maxHeight={contentHeight}>
        <div ref={contentRef}>{children}</div>
      </AccordionContent>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  overflow: hidden;
  padding: 18px 0;

  border-bottom: 1px solid ${hexa(colors.main, 20)};
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  margin: -18px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  .index {
    width: 50px;
  }

  h3 {
    flex: 1 0 0;
  }
`;

const AccordionContent = styled.div`
  padding: 8px 50px 0;
  max-height: ${({ $maxHeight, $isOpen }) =>
    $isOpen ? `${$maxHeight + 8}px` : "0"};
  overflow: hidden;
  transition: max-height 0.5s ease;
`;

const IconWrapper = styled.div`
  svg {
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? "scale(1, -1)" : "scale(1, 1)")};
  }
`;

export default Accordion;
