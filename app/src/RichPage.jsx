import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Header from "./UI/Header";
import Container from "./UI/Container";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const RichImage = styled.img`
  display: block;
  height: 45rem;
  width: 35rem;
  object-fit: cover;
`;

const RichContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin: 10rem 5rem;

  @media only screen and (max-width: 900px) {
    & {
      flex-direction: column;
      gap: 3rem;
      justify-content: center;
      align-items: center;
    }
  }
`;

const RichInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 3rem;
  background-color: #01003b;
  color: #fff;
  margin-right: 8rem;
  font-family: "Roboto";
  line-height: 3rem;
  font-size: 1.5rem;

  @media only screen and (max-width: 900px) {
    & {
      margin-right: 0;
    }
  }
`;

const AboutText = styled.p`
  font-family: "Roboto";
  font-size: 1.8rem;

  @media only screen and (max-width: 900px) {
    & {
      display: block;
    }
  }
`;

const Name = styled.h1`
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 4rem;
  letter-spacing: 1rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 900px) {
    & {
      text-align: center;
      margin-bottom: 4rem;
    }
  }
`;

const Fortune = styled.h2`
  font-family: "Oswald";
  font-size: 4rem;
  margin-bottom: 3rem;
`;

const FortuneTitle = styled.h3`
  margin-top: 3rem;
  font-family: "Oswald";
  font-size: 3rem;

  @media only screen and (max-width: 900px) {
    & {
      margin-top: 2rem;
    }
  }
`;

const RichInfoTitle = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 1rem;
  font-family: "Oswald";
  font-size: 3rem;
  color: #fff;
  width: 100%;
  padding: 1rem 0;
`;

const RichInfos = styled.h3`
  font-family: "Oswald";
  font-size: 2rem;
  font-weight: 300;
`;

const MeetButton = styled.button`
  margin-top: 5rem;
  width: 50%;
  height: 5rem;
  background: #01003b;
  color: #fff;
  border: 2px solid transparent;
  font-family: "Roboto";
  font-size: 2rem;
  transition: all 0.3s;
  font-weight: 700;

  &:hover {
    background: #fff;
    color: #01003b;
    border: 2px solid #01003b;
  }

  @media only screen and (max-width: 1300px) {
    & {
      width: 80%;
    }
  }

  @media only screen and (max-width: 900px) {
    & {
      width: 100%;
      font-size: 2.4rem;
      height: 6rem;
      font-weight: 700;
    }
  }
`;

const RichData = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarFlex = styled.div`
  @media only screen and (max-width: 900px) {
    & {
      display: flex;
      justify-content: center;
    }
  }
`;

function RichPage() {
  const { id } = useParams();

  const [richData, setRichData] = useState([]);

  const [dateValue, setDateValue] = useState(new Date());

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const saveDateValueHandler = (nextDateValue) => {
    setDateValue(nextDateValue.toISOString());
    localStorage.setItem("selectedDate", nextDateValue.toISOString());
  };

  useEffect(() => {
    async function getJSON(data) {
      try {
        const response = await fetch(`http://localhost:8080/riches/${id}`, {
          method: "get", // or 'PUT'
          RequestCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        setRichData(result);
        return richData;
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getJSON();
  }, []);

  const saveRichDataHandler = () => {
    localStorage.setItem("selectedRich", richData.id); //
    if (localStorage.getItem("token")) {
      window.location.href = "/order";
    } else {
      window.location.href = "/auth/register";
    }
  };

  return (
    <Container>
      <Header />
      <RichContainer>
        <RichInfo>
          <RichImage src={richData.imgUrl} />
          <RichInfoTitle>Informations</RichInfoTitle>
          <RichInfos>Company: {richData.company}</RichInfos>
          <RichInfos>Nationality: {richData.nationality}</RichInfos>
          <RichInfos>Birth Date: {richData.birthDate}</RichInfos>
        </RichInfo>
        <RichData>
          <Name>{richData.name}</Name>
          <AboutText>{richData.aboutText}</AboutText>
          <FortuneTitle>Fortune:</FortuneTitle>
          <Fortune>{USDollar.format(richData.fortune)}</Fortune>
          <CalendarFlex>
            <Calendar
              onChange={saveDateValueHandler}
              minDate={new Date()}
              value={dateValue}
            />
          </CalendarFlex>
          <MeetButton onClick={saveRichDataHandler}>
            Click here to meet him
          </MeetButton>
        </RichData>
      </RichContainer>
    </Container>
  );
}

export default RichPage;
