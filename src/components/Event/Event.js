import React from "react";
import styled from "styled-components";

import Time from "./Time/Time";
import Title from "./Title/Title";
import Description from "./Description/Description";
import People from "./People/People";
import Photo from "./Photo/Photo";

const EventWrapper = styled.div`
  padding: 0.25rem 0.75rem 0.5rem;
  margin: 1rem 0;
  width: 70%;
  border: 2px solid #eeece9;
  background-color: #ffffff;
  border-radius: 10px;
`;

const StyledEvent = ({
  images,
  year,
  month,
  title,
  description,
  people,
  profiles,
  photos,
}) => {
  return (
    <EventWrapper>
      <Time year={year} month={month} />
      <Title title={title} />
      <Description description={description} />
      <People images={images} people={people} profiles={profiles} />
      <Photo images={images} photos={photos} />
    </EventWrapper>
  );
};

export default StyledEvent;
