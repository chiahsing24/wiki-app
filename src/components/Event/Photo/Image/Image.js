import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-size: 0.8rem;
  width: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDescription = styled.div`
  display: block;
  margin: 0.5rem;
`;

const StyledImg = styled.img`
  width: 15rem;
  hight: 15rem;
  margin: 0.75rem;
  border-radius: 5px;
  display: block;
`;

const Image = ({ images, photo_name, description }) => {
  console.log(`<Image /> photo_name: `, photo_name);
  console.log(`<Image /> images: `, images);
  let image = images(`./${photo_name}`);

  return (
    <StyledWrapper>
      <StyledImg src={image} />
      <StyledDescription>{`${description}`}</StyledDescription>
    </StyledWrapper>
  );
};

export default Image;
