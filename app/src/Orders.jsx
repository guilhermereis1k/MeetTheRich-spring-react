import { Link } from "react-router-dom";
import RichItem from "./RichItem";
import Header from "./UI/Header"; //http://localhost:8080/riches
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const OrderContainer = styled.div`
  margin: 3rem auto;
  margin-top: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  gap: 0.2rem;
  font-family: "Roboto";
`;
const OrderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 2rem;
`;

const OrderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.4rem;
  text-align: center;
`;

const OrderData = styled.p`
  display: block;
  background-color: #e8ebfa;
  border-radius: 15px;
  text-align: center;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: 1.6rem;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0 2rem;
  margin-top: 2rem;
  height: 4rem;
  text-transform: uppercase;
  background: #01003b;
  color: #ffffff;
  transition: all 0.3s;
  font-family: "Roboto";
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background: #010029;
    color: #ffffff;
  }
`;

function Orders(props) {
  const JWTToken = localStorage.getItem("token").split('"').splice(3, 1);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    async function getJSON(data) {
      try {
        const response = await fetch(`http://localhost:8080/order/all/`, {
          method: "post",
          RequestCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Authorization": `Bearer ${JWTToken}`,
          },
        });
        const result = await response.json();
        setAllOrders(result);
        console.log(result);
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (localStorage.getItem("token") != null) {
      console.log("running");
      getJSON();
    }
  }, []);

  return (
    <>
      <Header />
      <OrderContainer>
        {allOrders.map((item) => (
          <>
            <h1>Order:</h1>
            <OrderBox>
              <h1>Rich name:</h1>
              <OrderData>{item.rich.name}</OrderData>
            </OrderBox>

            <OrderBox>
              <h1>Order made by:</h1>
              <OrderData>{item.user.login}</OrderData>
            </OrderBox>

            <OrderBox>
              <h1>Date of creation:</h1>
              <OrderData>{item.instant}</OrderData>
            </OrderBox>
          </>
        ))}
        {localStorage.getItem("selectedRich") === null ||
          (localStorage.getItem("selectedRich") === undefined && (
            <h1>No rich selected</h1>
          ))}
        <Link to="/">
          <Button>Return to home</Button>
        </Link>
      </OrderContainer>
    </>
  );
}

export default Orders;
