import { Link } from "react-router-dom";
import Header from "./UI/Header";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Container from "./UI/Container";

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

function OrderPage(props) {
  const JWTToken = localStorage.getItem("token").split('"').splice(3, 1);
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);
  const [formattedMeetingDate, setFormattedMeetingDate] = useState();
  const [formattedInstantDate, setFormattedInstantDate] = useState();

  const selectedDate = localStorage.getItem("selectedDate");

  useEffect(() => {
    console.log("useeffect");
    async function getJSON() {
      console.log("getting json");
      try {
        console.log("trying");
        const response = await fetch(
          `http://localhost:8080/order/create/${localStorage.getItem(
            "selectedRich"
          )}`,
          {
            method: "POST",
            RequestCredentials: "includes",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              "Authorization": `Bearer ${JWTToken}`,
            },
            body: JSON.stringify(selectedDate),
          }
        );
        const result = await response.json();

        setFormattedMeetingDate(new Date(result.instant).toLocaleDateString());

        setFormattedInstantDate(
          new Date(result.meetingDate).toLocaleDateString()
        );

        setOrder(result);
        localStorage.removeItem("selectedRich");
        localStorage.removeItem("selectedDate");
        setLoading(false);

        return result;
      } catch (error) {
        console.error("zError:", error);
      }
    }

    getJSON();
  }, []);

  return (
    <Container>
      <Header />
      <OrderContainer>
        {order ? (
          <>
            <OrderBox>
              <OrderTitle>Order created!</OrderTitle>
            </OrderBox>

            <OrderBox>
              <h1>Rich name:</h1>
              <OrderData>{order.rich.name}</OrderData>
            </OrderBox>

            <OrderBox>
              <h1>Order made by:</h1>
              <OrderData>{order.user.login}</OrderData>
            </OrderBox>

            <OrderBox>
              <h1>Date of creation:</h1>
              <OrderData>{formattedInstantDate}</OrderData>
            </OrderBox>

            <OrderBox>
              <h1>Date of the meeting:</h1>
              <OrderData>{formattedMeetingDate}</OrderData>
            </OrderBox>
          </>
        ) : (
          <h1>No rich selected</h1>
        )}
        <Link to="/">
          <Button>Return to home</Button>
        </Link>
      </OrderContainer>
    </Container>
  );
}

export default OrderPage;
