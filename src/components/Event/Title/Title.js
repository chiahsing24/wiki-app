import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
`;

const Title = ({ title }) => {
  return <TitleWrapper>{`Title:  ${title}`}</TitleWrapper>;
};

export default Title;
