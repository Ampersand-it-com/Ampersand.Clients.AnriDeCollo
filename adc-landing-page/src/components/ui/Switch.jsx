import React, { Fragment } from "react";
import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

const Switch = ({ options, active, setActive, className, ...props }) => {
  return (
    <StyledSwitch className={className} {...props}>
      {options.map((option, index) => (
        <Fragment key={option.value}>
          <Option
            className={"option" + (active === option.value ? " active" : "")}
            onClick={() => setActive(option.value)}
          >
            {option.label}
          </Option>
          {index < options.length - 1 && <span className="separator">/</span>}
        </Fragment>
      ))}
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  user-select: none;

  & .separator {
    margin: -4px;
    color: ${hexa(colors.main, 30)};
  }
`;

const Option = styled.span`
  padding: 16px;

  color: ${hexa(colors.main, 30)};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${hexa(colors.main, 50)};
  }

  &.active {
    color: ${colors.main};

    &:hover {
      color: ${colors.main};
    }
  }
`;

export default Switch;
