import { styled } from "styled-components";
import Header from "./components/Header";
import elonMuskMainImage from "./assets/Elon-Musk-PNG-Free-Image.png";

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
  font-size: 2rem;
  width: 70%;
`;

const TextTitle = styled.p`
  font-family: "Roboto";
  font-size: 5rem;
  margin-bottom: 4rem;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 5rem;
  display: block;
  width: 30rem;
  height: 4rem;
  text-transform: uppercase;
  background: #01003b;
  color: #ffffff;
  transition: all 0.3s;
  border: 2px solid transparent;
  font-family: "Roboto";
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #01003b;
    border: 2px solid #01003b;
  }
`;

function App() {
  return (
    <>
      <Header />
      <Content>
        <TextContainer>
          <TextTitle>You can meet Elon Musk in two clicks</TextTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            delectus autem, ipsum molestias vel asperiores incidunt quae nisi,
            doloremque magnam tempore optio assumenda repellat eaque aspernatur
            laudantium. Voluptates, non nemo!
          </Text>
          <Button>
            <a href="/riches">Click here!</a>
          </Button>
        </TextContainer>
        <Image src={elonMuskMainImage} alt="" />
      </Content>
    </>
  );
}

export default App;
