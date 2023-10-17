import RichItem from "./RichItem";
import Container from "./UI/Container";
import Header from "./UI/Header"; //http://localhost:8080/riches
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const RichList = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

function Riches() {
  const [richesList, setRichesList] = useState([]);

  useEffect(() => {
    async function getJSON() {
      try {
        const response = await fetch("http://localhost:8080/riches", {
          method: "get", // or 'PUT'
          RequestCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        });
        const result = await response.json();
        setRichesList(result);
        return richesList;
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getJSON();
  }, []);

  return (
    <Container>
      <Header />
      <RichList>
        {richesList.map((item) => (
          <RichItem
            id={item.id}
            key={item.id}
            img={item.imgUrl}
            title={item.name}
            company={item.company}
          />
        ))}
      </RichList>
    </Container>
  );
}

export default Riches;
