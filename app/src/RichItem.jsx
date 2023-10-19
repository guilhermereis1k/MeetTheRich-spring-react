import { Link } from "react-router-dom";
import { styled } from "styled-components";

const RichImage = styled.img`
  display: block;
  height: 35rem;
  width: 25rem;
  object-fit: cover;
`;

const RichContainer = styled.div`
  width: auto;
  height: auto;
  padding-bottom: 2rem;
  font-family: "Roboto";
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #01003b;
  color: #fff;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.05);
  }
`;

const RichTitle = styled.h1`
  margin-top: 1.5rem;
`;

function RichItem(props) {
  return (
    <Link to={`/riches/${props.id}`}>
      <RichContainer>
        <RichImage src={props.img} />
        <RichTitle>{props.title}</RichTitle>
        <h2>{props.company}</h2>
      </RichContainer>
    </Link>
  );
}

export default RichItem;
