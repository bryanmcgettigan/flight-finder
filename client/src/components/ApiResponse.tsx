import React from "react";
import "./css/ApiResponse.css"

interface ApiResponseProps {
  data: any;
}

const ApiResponse: React.FC<ApiResponseProps> = ({ data }) => {
  if (!data) return null;

  // Handle array or object response
  const renderPrices = () => {
    if (Array.isArray(data)) {
      return data.map((item, idx) => {
        if (item.price !== undefined) {
          // Format departure time if present
          let formattedDeparture = "";
          if (item.departure) {
            const dateObj = new Date(item.departure);
            formattedDeparture = dateObj.toLocaleString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });
          }
          return (
            <div key={idx} className="flight-info">
              <strong>Flight {idx + 1} Price:</strong> €{item.price}
              <br />
              {formattedDeparture && (
                <>
                  <strong>Departure time:</strong> {formattedDeparture}
                  <br />
                </>
              )}
              <a
                href={`https://skyscanner.net${item.booking_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                URL Link
              </a>
            </div>
          );
        }
        return null;
      });
    } else if (data.price !== undefined) {
      //Writing the time in a readable format
      let formattedDeparture = "";
      if (data.departure) {
        const dateObj = new Date(data.departure);
        formattedDeparture = dateObj.toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return (
        <div style={{ color: "#2a7d2e", marginBottom: "0.5em" }}>
          <strong>Price:</strong> ${data.price}
          {formattedDeparture && (
            <>
              <br />
              <strong>Departure time:</strong> {formattedDeparture}
            </>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="api-string">
      {renderPrices()}
      <pre
    className="api-pretty-json"
      ></pre>
    </div>
  );
};

export default ApiResponse;