import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  text-decoration: none;
`;
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
interface BG {
  imageUrl: string;
}
const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  min-height:80vh;
  background:url(${(props: BG) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position:center;
}
`;
export { StyledLink, StyledHeader, StyledBackground };
