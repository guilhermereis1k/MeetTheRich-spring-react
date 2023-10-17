import Container from "./UI/Container";
import Header from "./UI/Header";
import { styled } from "styled-components";
import JeffBezosWithFanImage from "./assets/jeffbezoswithfan.png";
import ElonMuskWithFanImage from "./assets/elon-musk-pranay-pathole.webp";
import BillGatesWithFanImage from "./assets/290835659_550615983219015_2499764682633741766_n.jpg";
import MarkZukWithFanImage from "./assets/CrLHlLgXEAAS6-a.jpg";
import LarryPageWithFanImage from "./assets/2-wp-AP100708134075-scaled.jpg";

const TextTitle = styled.h1`
  margin-top: 2rem;
  font-family: "Roboto";
  font-size: 3rem;
  font-weight: 900;
  line-height: 12rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.6rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoxImages = styled.div`
  margin-top: 9rem;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  height: 40rem;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Image = styled.img`
  object-fit: contain;
`;

function About() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <TextContainer>
            <TextTitle>
              <h1>About us</h1>
            </TextTitle>
            <Text>
              At Meet The Rich, we are dedicated to making extraordinary
              connections happen. Our mission is to bridge the gap between those
              seeking unique encounters and the world's most influential
              individuals. We believe in the power of connections, and we're
              here to facilitate unforgettable meetings that can inspire,
              empower, and transform lives.
              <br></br>
              With a team of experienced professionals, we ensure every
              interaction is discreet, secure, and tailored to your desires. Our
              commitment to excellence is unwavering, as we bring together
              dreamers and visionaries, uniting you with the icons of success.
              <br></br>
              Join us in the pursuit of remarkable encounters, where the
              extraordinary becomes reality. Welcome to Meet The Rich, where
              aspirations meet affluence, and extraordinary moments are just a
              click away.
            </Text>
          </TextContainer>
        </Content>
      </Container>
      <BoxImages>
        <Image src={JeffBezosWithFanImage} />
        <Image src={ElonMuskWithFanImage} />
        <Image src={MarkZukWithFanImage} />
        <Image src={BillGatesWithFanImage} />
        <Image src={LarryPageWithFanImage} />
      </BoxImages>
    </>
  );
}

export default About;
