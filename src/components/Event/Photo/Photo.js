import React from "react";
import styled from "styled-components";

import Image from "./Image/Image";

const Wrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
`;

const Photos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Photo = ({ images, photos }) => {
  return (
    <Wrapper>
      <div>Photos:</div>
      <Photos>
        {photos.map((photo) => (
          <Image
            images={images}
            photo_name={photo.photo_name}
            description={photo.description}
          />
        ))}
      </Photos>
    </Wrapper>
  );
};

export default Photo;
