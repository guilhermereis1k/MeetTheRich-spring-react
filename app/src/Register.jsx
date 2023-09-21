import { styled } from "styled-components"
import Header from "./components/Header"
import { useRef, useState } from "react"
import { useLocation } from "react-router-dom"

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
`

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
`

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
`

function Register() {
  let { state } = useLocation()

  const [user, setUser] = useState({
    email: "",
    name: "",
  })

  const onSubmitHandler = (e) => {
    e.preventDefault()

    async function postJSON(data) {
      try {
        const response = await fetch(
          `http://localhost:8080/order/${state.richId}`,
          {
            method: "POST", // or 'PUT'
            RequestCredentials: "includes",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
            body: JSON.stringify(user),
          }
        )
        const result = await response.json()
        return result
      } catch (error) {
        console.error("Error:", error)
      } finally {
        console.log("Success!")
      }
    }

    postJSON()
  }

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <Header />
      <form onSubmit={onSubmitHandler}>
        <FormContainer>
          <h1>Register now</h1>
          <p>Please fill in this form to make your meeting order.</p>

          <InputBox>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              onChange={handleInput}
              required
            />
          </InputBox>

          <InputBox>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              placeholder="Enter your name"
              name="name"
              id="name"
              onChange={handleInput}
              required
            />
          </InputBox>

          <InputBox>
            <Button type="submit">Register</Button>
          </InputBox>
        </FormContainer>
      </form>
    </>
  )
}

export default Register
