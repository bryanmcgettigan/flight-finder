import React, { useState } from "react";
import "./css/ChooseFlightType.css";


interface FlightTypeProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const ChooseFlightType: React.FC<FlightTypeProps> = ({ value, onChange }) => (
  <div className="choose-flight-type">
    <label htmlFor="flight-type" className="choose-flight-type-label">
      Flight Type
    </label>
    <select
      id="flight-type"
      className="choose-flight-type-select"
      value={value}
      onChange={onChange}
    >
      <option value="onewaytrip">One Way</option>
      <option value="roundtrip">Round Trip</option>
    </select>
  </div>
);


export default ChooseFlightType;