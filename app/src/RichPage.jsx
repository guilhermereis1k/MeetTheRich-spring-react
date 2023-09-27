import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { styled } from "styled-components"
import Header from "./components/Header"

function RichPage() {
  const { id } = useParams()

  const [richData, setRichData] = useState([])

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
        })
        const result = await response.json()
        setRichData(result)
        return richData
      } catch (error) {
        console.error("Error:", error)
      }
    }

    getJSON()
  }, [])

  const RichImage = styled.img`
    display: block;
    height: 45rem;
    width: 35rem;
    object-fit: cover;
    margin-bottom: 2rem;
  `

  const RichContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin: 10rem 5rem;
  `

  const RichInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center
    border: 1px solid #000;
    margin-right: 8rem;
    font-family: "Roboto";
    line-height: 3rem;
    font-size: 1.5rem;
  `

  const AboutText = styled.p`
    font-family: "Roboto";
    font-size: 1.8rem;
  `

  const Name = styled.h1`
    text-transform: uppercase;
    font-family: "Oswald";
    font-size: 4rem;
    letter-spacing: 1rem;
    margin-bottom: 2rem;
  `

  const Fortune = styled.h2`
    font-family: "Oswald";
    font-size: 4rem;
  `

  const FortuneTitle = styled.h3`
    margin-top: 5rem;
    font-family: "Oswald";
    font-size: 3rem;
  `

  const RichInfoTitle = styled.h2`
    margin-bottom: 1rem;
    font-family: "Oswald";
    font-size: 3rem;
  `

  const RichInfos = styled.h3`
    font-family: "Oswald";
    font-size: 2rem;
    font-weight: 300;
  `

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

    &:hover {
      background: #fff;
      color: #01003b;
      border: 2px solid #01003b;
    }
  `

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  return (
    <>
      <Header />
      <RichContainer>
        <RichInfo>
          <RichImage src={richData.imgUrl} />
          <RichInfoTitle>Informations</RichInfoTitle>
          <RichInfos>Company: {richData.company}</RichInfos>
          <RichInfos>Nationality: {richData.nationality}</RichInfos>
          <RichInfos>Birth Date: {richData.birthDate}</RichInfos>
        </RichInfo>
        <div>
          <Name>{richData.name}</Name>
          <AboutText>{richData.aboutText}</AboutText>
          <FortuneTitle>Fortune:</FortuneTitle>
          <Fortune>{USDollar.format(richData.fortune)}</Fortune>
          <Link to="/users/register" state={{ richId: richData.id }}>
            <MeetButton>Click here to meet him</MeetButton>
          </Link>
        </div>
      </RichContainer>
    </>
  )
}

export default RichPage
