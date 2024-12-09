import React from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
`;

const Description = ({ description }) => {
  return (
    <DescriptionWrapper>{`Description:  ${description}`}</DescriptionWrapper>
  );
};

export default Description;
