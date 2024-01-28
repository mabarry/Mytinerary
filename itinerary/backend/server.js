const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const fetch = require("node-fetch");
require('dotenv').config();



const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:4000' }));

const apiKey = process.env.YELP_API_KEY;
const categories = ["breakfast", "active", "lunch", "active", "dinner", "nightlife"]
let location = "San Antonio"
let dates = "";
const otherOptions = {
    breakfast: {},
    activities: {},
    lunch: {},
    dinner: {},
    nightLife: {}
}


const getOptions = async (category) => {
    try{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const apiURL = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${category}&sort_by=best_match&limit=20`;
        const response = await fetch(apiURL, options);

        if(!response.ok){
            throw new Error("YO WHAT HAPPENED WHAATTT OH GOD ITS JOEVER")
        }

        const results = await response.json();
        
        return results;
    }catch (err) {
        console.error(err);
        return null;
    }
}

const buildItinerary = async (startDate, endDate) => {
    //const tripLength = calcDays(startDate, endDate);
    const tripLength = 1;
    let itinerary = [];
    for(let i = 0; i < tripLength; i++){
        const day = {
            breakfast: {},
            activityOne: {},
            lunch: {},
            activityTwo: {},
            dinner: {},
            nightLife: {},
        }
        let results = await getOptions(categories[0]);
        day.breakfast = results.businesses[i];
        otherOptions.breakfast = results.businesses;
        results = await getOptions(categories[1]);
        day.activityOne = results.businesses[i];
        otherOptions.activities = results.businesses;
        results = await getOptions(categories[2]);
        day.lunch = results.businesses[i];
        otherOptions.lunch = results.businesses;
        results = await getOptions(categories[3]);
        day.activityTwo = results.businesses[i];
        results = await getOptions(categories[4]);
        day.dinner = results.businesses[i];
        otherOptions.dinner = results.businesses;
        results = await getOptions(categories[5]);
        day.nightLife = results.businesses[i];
        otherOptions.nightLife = results.businesses;

        itinerary.push(day);
    }

    return itinerary;
}

app.post('/send-info', async(req, res)=> { 
    const { sentLoc, sentDate } = req.body;
    location = sentLoc;
    dates = sentDate;
});

app.get('/itinerary', async(req,res)=> {
    const results = await buildItinerary(0,1);
    res.send(results)
});

app.get('/otherOptions', async(req,res)=> {
    const results = await buildItinerary(0,1);
    res.send(otherOptions)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });