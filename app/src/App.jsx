import { styled } from "styled-components";
import Header from "./components/Header";
import elonMuskMainImage from "./assets/Elon-Musk-PNG-Free-Image.png";
import { Link } from "react-router-dom";
import Riches from "./Riches";

const Content = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: calc(100vh - 6.5rem);
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 90%;
  align-self: end;
  justify-self: right;
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: 1.8rem;
  font-weight: 300;
  line-height: auto;
  width: 70%;
  margin-bottom: 5rem;
`;

const TextTitle = styled.h1`
  font-family: "Roboto";
  font-size: 12rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 12rem;
  margin-bottom: 2rem;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

const Button = styled.button`
  display: block;
  width: 68%;
  height: 6rem;
  text-transform: uppercase;
  background: #01003b;
  color: #ffffff;
  transition: all 0.3s;
  border: 2px solid transparent;
  font-family: "Roboto";
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background: #010029;
    color: #ffffff;
  }
`;

function App() {
  return (
    <>
      <Header />
      <Content>
        <TextContainer>
          <TextTitle>
            You<br></br>
            can meet<br></br>
            Elon Musk
          </TextTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            delectus autem, ipsum molestias vel asperiores incidunt quae nisi.
          </Text>
          <Link to="/riches">
            <Button>Click here!</Button>
          </Link>
        </TextContainer>
        <Image src={elonMuskMainImage} alt="" />
      </Content>
    </>
  );
}

export default App;
