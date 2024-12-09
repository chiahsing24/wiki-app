import React from "react";
import styled from "styled-components";

import Image from "../../Photo/Image/Image";

const StyledWrapper = styled.div`
  font-size: 0.8rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Name = styled.div`
  padding: 0 0 0 0.75rem;
`;

const Relationship = styled.div`
  padding: 0 0 0 0.75rem;
`;

const Description = styled.div`
  padding: 0 0 0 0.75rem;
`;

const StyledImg = styled.img`
  width: 15rem;
  hight: 15rem;
  margin: 0.75rem;
  border-radius: 5px;
  display: block;
`;

const Profile = ({ images, name, relationship, description, photo_name }) => {
  console.log(`<Profile /> images: `, images);
  console.log(`<Profile /> name: `, name);
  console.log(`<Profile /> relationship: `, relationship);
  console.log(`<Profile /> photo_name: `, photo_name);
  let image = images(`./${photo_name}`);

  return (
    <StyledWrapper>
      <StyledImg src={image} />
      <Name>{`Name: ${name}`}</Name>
      <Relationship>{`Relationship: ${relationship}`}</Relationship>
      <Description>{`Description: ${description}`}</Description>
    </StyledWrapper>
  );
};

export default Profile;
