import React from "react";

interface ApiResponseProps {
  data: any;
}

const ApiResponse: React.FC<ApiResponseProps> = ({ data }) => {
  if (!data) return null;

  // Handle array or object response
  const renderPrices = () => {
    if (Array.isArray(data)) {
      return data.map((item, idx) =>
        item.price !== undefined ? (
          <div key={idx} style={{ color: "#2a7d2e", marginBottom: "0.5em" }}>
            <strong>Flight {idx + 1} Price:</strong> ${item.price} 
            <a href = {item.booking_url} target = "_blank" rel="noopener noreferrer">URL Link</a>
          </div>
        ) : null
      );
    } else if (data.price !== undefined) {
      return (
        <div style={{ color: "#2a7d2e", marginBottom: "0.5em" }}>
          <strong>Price:</strong> ${data.price}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="api-string">
      <strong>API RESPONSE:</strong>
      {renderPrices()}
      <pre style={{ textAlign: "left", background: "#f4f4f4", padding: "1em", borderRadius: "5px" }}>

      </pre>
    </div>
  );
};

export default ApiResponse;