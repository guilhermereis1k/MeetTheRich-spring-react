import { styled } from "styled-components";
import Header from "./UI/Header";
import elonMuskMainImage from "./assets/wp2048442-elon-musk-wallpapers.png";
import { Link } from "react-router-dom";
import Riches from "./Riches";
import Container from "./UI/Container";
import WhiteHeader from "./UI/WhiteHeader";

const Content = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: calc(100vh - 6.5rem);
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: 1.8rem;
  font-weight: 300;
  line-height: auto;
  width: 50%;
  margin-bottom: 5rem;
`;

const TextTitle = styled.h1`
  font-family: "Roboto";
  font-size: 12rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 12rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  color: #fff;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  height: 6rem;
  text-transform: uppercase;
  color: #01003b;
  background-color: #ffffff;
  transition: all 0.1s;
  border: 2px solid transparent;
  font-family: "Roboto";
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${elonMuskMainImage});
`;

function App() {
  return (
    <Background>
      <Container>
        <WhiteHeader />
        <Content>
          <TextContainer>
            <TextTitle>
              You<br></br>
              can meet<br></br>
              Elon Musk
            </TextTitle>
            <Text>
              Make a bold choice and schedule a meeting with one of the most
              influential tycoons. Simply select your favorite millionaire,
              place your order, and await our contact. You're about to meet the
              elite of the world's wealthiest.
            </Text>
            <Link to="/riches">
              <Button>Click here!</Button>
            </Link>
          </TextContainer>
        </Content>
      </Container>
    </Background>
  );
}

export default App;
