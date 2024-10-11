import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

const Input = ({ className, type, ...props }) => (
  <InputContainer className={"input " + className}>
    <input type={type || "text"} {...props} />
  </InputContainer>
);

const InputContainer = styled.label`
  position: relative;

  display: flex;
  flex-direction: row;
  padding: 16px 0;

  cursor: text;

  &::before {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 0;
    border-bottom: 1px solid ${colors.bg};
  }

  input {
    display: block;
    width: 100%;
    height: 20px;

    padding: 0;

    background: none;
    border: none;
    outline: none;
    color: ${colors.bg};

    &::placeholder {
      color: ${hexa(colors.bg, 40)};
    }
  }
`;

export default Input;
