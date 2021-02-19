import styled from "styled-components";
import { BgStyled } from "../../models";

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

const StyledBtn = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem;
  background: transparent;
  color: black;
  border: 2px solid black;
`;
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  min-height:80vh;
  background:url(${(props: BgStyled) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position:center;
}
`;
const StyledHeaderAuth = styled.div`
  display:flex;
  margin: 0 1em;
  align-items: center;
}
`;
const StyledHeaderUserName = styled.div`
  margin:0 1em;
}
`;
const FormBtns = styled.div`
  display: flex;
  margin: 2em auto;
  align-items: center;
  max-width: 320px;
  justify-content: space-evenly;
`;
const FormInput = styled.input`
  position: relative;
  width: 95%;
  min-width: 0;
  padding: 4px 11px;
  margin: 1.5em 1em;
  font-size: 14px;
  line-height: normal;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;
const FormContainer = styled.div`
  max-width: 700px;
  margin: 4em auto;
`;
export {
  StyledLink,
  StyledHeader,
  StyledBackground,
  StyledHeaderAuth,
  StyledHeaderUserName,
  StyledBtn,
  FormBtns,
  FormInput,
  FormContainer,
};
