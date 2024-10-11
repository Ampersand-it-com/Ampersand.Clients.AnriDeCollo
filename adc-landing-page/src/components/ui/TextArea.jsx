import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

const TextArea = ({ className, ...props }) => (
  <TextAreaContainer className={"input " + className}>
    <textarea className="scrollbar" {...props}></textarea>
  </TextAreaContainer>
);

const TextAreaContainer = styled.label`
  position: relative;
  display: block;
  padding: 18px 0;

  cursor: text;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: -1;
    border-bottom: 1px solid ${colors.bg};
  }

  textarea {
    display: block;
    width: 100%;
    line-height: 20px;
    height: 4lh;

    padding: 0;

    background: none;
    border: none;
    outline: none;
    color: ${colors.bg};

    resize: none;

    &::placeholder {
      color: ${hexa(colors.bg, 40)};
    }
  }
`;

export default TextArea;
