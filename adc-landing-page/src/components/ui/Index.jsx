import styled from "styled-components";
import { colors, hexa } from "../../helpers/styleSetup";

const RawIndex = ({ className, index }) => (
  <p className={"index " + className}>({String(index).padStart(2, "0")})</p>
);

const Index = styled(RawIndex)`
  font-family: "NyghtSerif";
  font-weight: bold;
  font-style: italic;
  color: ${hexa(colors.main, 50)};
`;

export default Index;
