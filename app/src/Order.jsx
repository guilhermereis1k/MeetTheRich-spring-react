import RichItem from "./RichItem";
import Header from "./components/Header"; //http://localhost:8080/riches
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const RichList = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-family: "Roboto";
`;

function Order(props) {
  const JWTToken = localStorage.getItem("token").split('"').splice(3, 1);
  const [order, setOrder] = useState();

  useEffect(() => {
    async function getJSON(data) {
      try {
        const response = await fetch(
          `http://localhost:8080/order/${localStorage.getItem("selectedRich")}`,
          {
            method: "post", // or 'PUT'
            RequestCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              "Authorization": `Bearer ${JWTToken}`,
            },
          }
        );
        const result = await response.json();
        setOrder(result);
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getJSON();
  }, []);

  console.log(order);
  return (
    <>
      <Header />
      <RichList>
        {order && (
          <div>
            <h1>Order created!</h1>
            <br></br>
            <h1>Rich name:</h1>
            <br></br>
            <h2>{order.rich.name}</h2>
            <br></br>
            <h1>Order made by:</h1>
            <br></br>
            <h2>{order.user.login}</h2>
            <br></br>
            <h1>Date of creation:</h1>
            <br></br>
            <h2>{order.instant}</h2>
            <br></br>
          </div>
        )}
      </RichList>
    </>
  );
}

export default Order;
