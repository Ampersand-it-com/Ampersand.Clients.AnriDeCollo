import React, { useState } from "react";
import styled from "styled-components";

const Tabs = ({ children, ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <StyledTabs {...props}>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          active: activeTab === index,
          clickEffect: () => {
            handleTabClick(index);
          },
          key: index,
        });
      })}
    </StyledTabs>
  );
};

const StyledTabs = styled.nav`
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
`;

export default Tabs;
