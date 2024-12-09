import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #cf754a;
`;

const Header = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
