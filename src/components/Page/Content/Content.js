import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  padding: 1rem;
  margin-bottom: 10rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
