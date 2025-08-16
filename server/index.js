const express = require('express');
require('dotenv').config()
const axios = require('axios'); //Used for fetching from flightAPI Prices
const cors = require("cors")
const app = express()

const APIKEY = process.env.APIKEY
const PORT = process.env.PORT 

app.use(express.json());
app.use(cors());

app.get('/onewayFlight/:dest/:dep/:date', async (req,res) => {  
    const { dest, dep, date } = req.params;
    if (!dest || !dep || !date) {
        return res.status(400).json({ error: "Missing required parameters: dest, dep, date" });
    }
    
    try {
        //const API_URL = `https://api.flightapi.io/onewaytrip/${APIKEY}/${dep}/${dest}/${date}/1/0/0/Economy/EUR`;
        const API_URL = 'http://127.0.0.1:5000/get_response_file'
        const response = await axios.get(API_URL);
        const data = response.data

        const flights = data.itineraries.map(itinerary => {
        const leg = data.legs.find(l => l.id === itinerary.leg_ids[0]);
        const item = itinerary.pricing_options[0].items[0];

      return {
        //id: itinerary.id,
        price: itinerary.pricing_options[0].price.amount,
        currency: "EUR",
        departure: leg.departure,
        arrival: leg.arrival,
        duration: leg.duration,
        //ops: leg.stop_count,
        //flight_number: data.segments.find(s => s.id === item.segment_ids[0]).marketing_flight_number,
        //origin: leg.origin_place_id,
        //destination: leg.destination_place_id,
        booking_url: item.url,
        provider: item.agent_id
      };
    });

        flights.sort((a, b) => Number(a.price) - Number(b.price));

        //Get top 5 cheapest
        const top5CheapestFlights = flights.slice(0, 5);

        res.json(top5CheapestFlights);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});



app.listen(
    PORT
)