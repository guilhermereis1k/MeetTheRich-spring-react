import Header from "./components/Header"; //http://localhost:8080/riches
import { useEffect, useState } from "react";

function Riches() {
  const [richesList, setRichesList] = useState();

  useEffect(() => {
    async function getJSON(data) {
      try {
        const response = await fetch("http://localhost:8080/riches", {
          method: "get", // or 'PUT'
          RequestCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        setRichesList(result);
        return richesList;
      } catch (error) {
        console.error("Error:", error);
      } finally {
        console.log(richesList);
      }
    }

    getJSON();
  }, []);

  console.log(richesList);
  return (
    <>
      <Header />
      <div>
        <h1>Hi!</h1>
      </div>
    </>
  );
}

export default Riches;
