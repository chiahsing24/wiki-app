import styled from "styled-components";

const StyledPage = styled.div`
  height: 100%;
  background-color: #fbfbf3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
