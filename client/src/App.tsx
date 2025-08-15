import TextBox from "./components/TextBox"
import DateBox from "./components/DateBox"
import AcceptButton from "./components/AcceptButton"
import { useState,useEffect } from "react";
import './App.css';
import ApiResponse from "./components/ApiResponse";

function App() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);




  //On pressing the button the request will be sent
const handleAccept = () => {
  const url = `http://localhost:8080/onewayFlight/${departure}/${destination}/${date}`;
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
        {data && <ApiResponse data={data} />}
      </div>
    </div>
  )
}

export default App