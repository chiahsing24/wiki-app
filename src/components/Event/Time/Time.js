import React from "react";
import styled from "styled-components";

const TimeWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
  width: 6rem;
  background-color: #cb6040;
  color: white;
  border-radius: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = ({ year, month }) => {
  return <TimeWrapper>{`${month}, ${year}`}</TimeWrapper>;
};

export default Time;
