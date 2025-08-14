import TextBox from "./components/TextBox"
import DateBox from "./components/DateBox"
import AcceptButton from "./components/AcceptButton"
import { useState } from "react";
import './App.css';

function App() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const APIKEY = "TSTAPIKEY"

  const [APIString, setAPIstring] = useState("")

  const handleAccept = () => {
    console.log("Departure:", departure);
    console.log("Destination:", destination);
    console.log("Date:", date);
    setAPIstring("https://api.flightapi.io/onewaytrip/" + APIKEY + "/" + departure + "/" + destination + "/" + date + "/1/0/0/Economy/EUR")
  };

  return (
    <div className="app-bg">
      <div className="app-card">
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1976d2", letterSpacing: "1px" }}>
          Flight Finder
        </h2>
        <TextBox
          value={departure}
          onChange={e => setDeparture(e.target.value)}
        >
          Departure Airport Code
        </TextBox>
        <TextBox
          value={destination}
          onChange={e => setDestination(e.target.value)}
        >
          Destination Airport Code
        </TextBox>
        <DateBox
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <AcceptButton onClick={handleAccept}>Find Flights</AcceptButton>
        </div>
        {APIString && (
          <div className="api-string">
            <strong>API URL:</strong>
            <div>{APIString}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App