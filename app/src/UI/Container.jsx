import { styled } from "styled-components";

const ContainerStyled = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function Container(props) {
  return <ContainerStyled>{props.children}</ContainerStyled>;
}

export default Container;
