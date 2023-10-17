import { styled } from "styled-components";
import Header from "./UI/Header";
import { useState } from "react";
import Container from "./UI/Container";

const FormContainer = styled.div`
  margin: 10rem auto;
  border-radius: 10px;
  font-family: "Roboto";
  width: 30%;

  & h1 {
    font-size: 2.4rem;
    text-align: center;
  }

  & p {
    font-size: 1.6rem;
    text-align: center;
    margin-top: 1rem;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & label {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  & input {
    font-size: 1.2rem;
    width: 100%;
    min-height: 4rem;
    border-radius: 10px;
    background-color: #ececec;
    padding-left: 1.4rem;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 4rem;
  text-transform: uppercase;
  background: #01003b;
  color: #ffffff;
  transition: all 0.3s;
  border: 2px solid transparent;
  font-family: "Roboto";
  font-size: 1.4rem;
  margin-top: 2rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #01003b;
    border: 2px solid #01003b;
  }
`;

function Login() {
  const [jwtToken, setJwtToken] = useState("");

  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    async function postJSON(data) {
      try {
        const response = await fetch(`http://localhost:8080/auth/login`, {
          method: "POST", // or 'PUT'
          RequestCredentials: "includes",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        if (response.status == 200) {
          localStorage.setItem("token", JSON.stringify(result));
          if (localStorage.getItem("selectedRich")) {
            window.location.href = "/order";
          } else {
            window.location.href = "/riches";
          }
        } else {
          alert(response.message);
        }
        return result;
      } catch (error) {
        throw new Error(error);
      } finally {
        if (localStorage.getItem("token")) {
          setInterval(() => {
            localStorage.removeItem("token");
          }, 7200000);
        }
      }
    }

    postJSON();
  };

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Header />
      <form onSubmit={onSubmitHandler}>
        <FormContainer>
          <h1>Login now</h1>
          <p>Please fill in this form to make your meeting order.</p>

          <InputBox>
            <label htmlFor="login">Login</label>
            <input
              type="text"
              placeholder="Enter your login"
              name="login"
              id="login"
              onChange={handleInput}
              required
            />
          </InputBox>

          <InputBox>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              password="password"
              id="password"
              onChange={handleInput}
              required
            />
          </InputBox>

          <InputBox>
            <Button type="submit">Login</Button>
          </InputBox>
        </FormContainer>
      </form>
    </Container>
  );
}

export default Login;
