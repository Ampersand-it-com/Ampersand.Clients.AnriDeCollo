import styled, { css } from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

function Button({ children, variant, ...props }) {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  gap: 8px;

  border: none;
  outline: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:disabled {
    pointer-events: none;
  }

  * {
    flex-shrink: 0;
  }

  ${(props) => (props.$variant ? variants[props.$variant] : variants.default)}
`;

const variants = {
  default: css`
    background: ${colors.main};
    color: ${colors.bg};

    &:hover,
    &:active {
      background: ${hexa(colors.main, 80)};
    }
  `,

  inverted: css`
    background: ${colors.bg};
    color: ${colors.main};
    font-weight: 500;

    &:hover,
    &:active {
      background: ${colors.tile};
    }
  `,

  bare: css`
    margin: -18px -32px;

    color: ${colors.main};
    background: none;
    backdrop-filter: none;

    &:hover,
    &:active {
      color: ${hexa(colors.main, 80)};
    }
  `,

  border: css`
    width: 36px;
    height: 36px;

    color: ${colors.main};
    background: none;
    border: 1px solid ${colors.main};
    border-radius: 666px;
    padding: 0;

    &:disabled {
      color: ${hexa(colors.main, 30)};
      border-color: ${hexa(colors.main, 30)};
    }

    &:hover,
    &:active {
      background: ${hexa(colors.main, 10)};
    }
  `,

  borderInverted: css`
    width: 36px;
    height: 36px;

    color: ${colors.bg};
    background: none;
    border: 1px solid ${colors.bg};
    border-radius: 666px;
    padding: 0;

    &:disabled {
      color: ${hexa(colors.bg, 30)};
      border-color: ${hexa(colors.bg, 30)};
    }

    &:hover,
    &:active {
      background: ${hexa(colors.bg, 10)};
    }
  `,
};

export default Button;
