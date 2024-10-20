import styled from "styled-components";

const Logo = ({ className, ...props }) => (
  <div className={"logo " + className} {...props}>
    ADC
  </div>
);

const StyledLogo = styled(Logo)`
  font-family: "NyghtSerif";
  font-weight: bold;
  font-style: italic;
  font-size: 42px;
  line-height: 1;
`;

export default StyledLogo;
