import TextBox from "./components/TextBox"
import DateBoxLocal from "./components/DateBoxLocal"
import AcceptButton from "./components/AcceptButton"
import ChooseFlightType from "./components/ChooseFlightType";
import React, { useState } from "react";
import './components/css/App.css'
import ApiResponse from "./components/ApiResponse";

function App() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [flightType, setFlightType] = useState("onewaytrip");
  const [departDate, setDepartDate] = useState(""); 
  const [returnDate, setReturnDate] = useState(""); 
  const [data, setData] = useState(null);

  //On pressing the button the request will be sent
const handleAccept = () => {
  let url = "";
  if (flightType === "roundtrip") {
    url = `http://localhost:8080/roundtrip/${departure}/${destination}/${departDate}/${returnDate}`;
  } else {
    url = `http://localhost:8080/onewaytrip/${departure}/${destination}/${departDate}`;
  }
  console.log("Requesting:", url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data); // store response in state
    })
    .catch((err) => console.error(err));


};

  return (
    <div className="app-bg">
      <div className="app-card">
        <h2 className = "app-h2">
          Flight Finder
        </h2>
        <ChooseFlightType
          value={flightType}
          onChange={e => setFlightType(e.target.value)}
        />
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
        <DateBoxLocal
          value={departDate}
          onChange={setDepartDate}
        />
        {flightType === "roundtrip" && (
          <DateBoxLocal
            value={returnDate}
            onChange={setReturnDate}
          />
        )}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <AcceptButton onClick={handleAccept}>Find Flights</AcceptButton>
        </div>
        {data && <ApiResponse data={data} />}
      </div>
    </div>
  )
}

export default App