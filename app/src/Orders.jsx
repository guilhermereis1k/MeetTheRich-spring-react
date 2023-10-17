import { Link } from "react-router-dom";
import RichItem from "./RichItem";
import Header from "./UI/Header";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Container from "./UI/Container";
import CloseIconSVG from "./assets/CloseIconSVG";

const OrderContainer = styled.div`
  margin: 3rem auto;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 0.2rem;
  font-family: "Roboto";
`;
const OrderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 2rem;

  & h1 {
    font-size: 1.4rem;
    margin-bottom: 1;
  }
`;
const OrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #01003b;
  padding: 2rem;
  border-radius: 15px;
`;

const OrderTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const OrderFlex = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: 7rem;
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

const OrderH1 = styled.h1`
  color: #fff;
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

const OrderPrincipalTitle = styled.h1`
  margin-bottom: 2rem;
  color: #fff;
`;

const OrderIcon = styled.button`
  fill: white;
  background: transparent;
  text-align: center;
  cursor: pointer;
`;

function Orders(props) {
  const JWTToken = localStorage.getItem("token").split('"').splice(3, 1);
  const [allOrders, setAllOrders] = useState([]);
  const [formattedMeetingDate, setFormattedMeetingDate] = useState();
  const [formattedInstantDate, setFormattedInstantDate] = useState();

  useEffect(() => {
    async function getJSON() {
      try {
        const response = await fetch(`http://localhost:8080/order/all`, {
          method: "GET",
          RequestCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Authorization": `Bearer ${JWTToken}`,
          },
        });
        const result = await response.json();
        setAllOrders(result);
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (localStorage.getItem("token") != null) {
      getJSON();
    }
  }, []);

  const DeleteOrderHandler = (id) => {
    async function getJSON() {
      try {
        const response = await fetch(`http://localhost:8080/order/delete`, {
          method: "DELETE",
          RequestCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Authorization": `Bearer ${JWTToken}`,
          },
          body: JSON.stringify(id),
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getJSON();
    window.location.reload();
  };
  console.log(allOrders);
  return (
    <Container>
      <Header />
      <OrderContainer>
        <OrderTitle>Orders</OrderTitle>
        <OrderFlex>
          {allOrders == [] && <h1>No orders.</h1>}
          {allOrders.map((item) => (
            <OrderContent key={item.id}>
              <OrderPrincipalTitle>Order {item.id}:</OrderPrincipalTitle>
              <OrderBox>
                <OrderH1>Rich name:</OrderH1>
                <OrderData>{item.rich.name}</OrderData>
              </OrderBox>

              <OrderBox>
                <OrderH1>Order made by:</OrderH1>
                <OrderData>{item.user.login}</OrderData>
              </OrderBox>

              <OrderBox>
                <OrderH1>Date of creation:</OrderH1>
                <OrderData>
                  {new Date(item.instant).toLocaleDateString()}
                </OrderData>
              </OrderBox>

              <OrderBox>
                <OrderH1>Date of the meeting:</OrderH1>
                <OrderData>
                  {new Date(item.meetingDate).toLocaleDateString()}
                </OrderData>
              </OrderBox>

              <OrderIcon onClick={() => DeleteOrderHandler(item.id)}>
                <CloseIconSVG />
              </OrderIcon>
            </OrderContent>
          ))}
        </OrderFlex>
        {localStorage.getItem("selectedRich") === null ||
          (localStorage.getItem("selectedRich") === undefined && (
            <h1>No rich selected</h1>
          ))}
        <Link to="/">
          <Button>Return to home</Button>
        </Link>
      </OrderContainer>
    </Container>
  );
}

export default Orders;
