import styled, { css } from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";
import { useActiveSection } from "../../helpers/activeNavigation";

const Tab = ({ children, className, onClick, href, ...props }) => {
  const { activeSection } = useActiveSection();

  const handleClick = (e) => {
    onClick && onClick(e);
  };

  return (
    <StyledTab
      className={"tab " + className}
      $active={activeSection === href.substring(1)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledTab>
  );
};

const StyledTab = styled.a`
  position: relative;
  flex-shrink: 0;

  padding: 16px;

  color: ${colors.main};
  cursor: pointer;
  /* transition: all 0.4s ease; */

  font-weight: ${(props) => (props.$active ? "500" : "400")};

  ${(props) =>
    !props.$active &&
    css`
      &:hover::before {
        transform: scale(0.3, 1);
      }
    `}

  &::before {
    display: block;
    transform: ${(props) => (props.$active ? `scale(1, 1)` : "scale(0, 0)")};
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 0;
    height: 2px;
    background: ${colors.main};
    transition: transform 0.4s ease;
  }
`;

export default Tab;
