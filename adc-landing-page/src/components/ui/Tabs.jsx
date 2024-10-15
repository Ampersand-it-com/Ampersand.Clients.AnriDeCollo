import React, { useState } from "react";
import styled from "styled-components";

const Tabs = ({ children, ...props }) => {
  return <StyledTabs {...props}>{children}</StyledTabs>;
};

const StyledTabs = styled.nav`
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
`;

export default Tabs;
