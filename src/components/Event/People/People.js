import React from "react";
import styled from "styled-components";

import Profile from "./Profile/Profile";

const Wrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
`;

const Profiles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const People = ({ images, people, profiles }) => {
  console.log(`<People /> images: `, images);

  return (
    <Wrapper>
      <div>{`People: ${people}`}</div>
      <Profiles>
        {profiles.map((person) => (
          <Profile
            images={images}
            name={person.name}
            relationship={person.relationship}
            description={person.description}
            photo_name={person.photo_name}
          />
        ))}
      </Profiles>
    </Wrapper>
  );
};

export default People;
