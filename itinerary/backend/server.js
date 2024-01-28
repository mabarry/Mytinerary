const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const fetch = require("node-fetch");
const { start } = require('repl');
require('dotenv').config();



const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

app.use(cors());

const apiKey = process.env.YELP_API_KEY;
const categories = ["breakfast", "active", "lunch", "active", "dinner", "nightlife"]
let location = "San Antonio"
let startDate = null;
let endDate = null;
const otherOptions = {
    breakfast: {},
    activities: {},
    lunch: {},
    dinner: {},
    nightLife: {}
}

let storedItinerary = null;


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

const calcDays = (start, end) => {
    const timeDifference = end- start;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24) + 1;
    return daysDifference;
}

const sortByRating = (businesses) => {
    const sortedBusinesses = businesses.sort((a,b) => b.rating - a.rating);
    return sortedBusinesses;
}

const buildItinerary = async () => {
    const tripLength = calcDays(startDate, endDate);
    let itinerary = [];
    

    // fill in options
    let results = await getOptions(categories[0]);
    let sortedRes = sortByRating(results.businesses)
    otherOptions.breakfast = sortedRes;

    results = await getOptions(categories[1]);
    sortedRes = sortByRating(results.businesses)
    otherOptions.activities = sortedRes;

    results = await getOptions(categories[2]);
    sortedRes = sortByRating(results.businesses)
    otherOptions.lunch = sortedRes;
   
    results = await getOptions(categories[4]);
    sortedRes = sortByRating(results.businesses)
    otherOptions.dinner = sortedRes;

    results = await getOptions(categories[5]);
    sortedRes = sortByRating(results.businesses)
    otherOptions.nightLife = sortedRes;

    for(let i = 0; i < tripLength; i++){
        const day = {
            breakfast: {},
            activityOne: {},
            lunch: {},
            activityTwo: {},
            dinner: {},
            nightLife: {},
        }
    
        day.breakfast = otherOptions.breakfast[i];
       
        day.activityOne = otherOptions.activities[i];
  
        day.lunch = otherOptions.lunch[i];
  
        day.activityTwo = otherOptions.activities[i];
  
        day.dinner = otherOptions.dinner[i];

        day.nightLife = otherOptions.nightLife[i];


        itinerary.push(day);
    }

    return itinerary;
}

const updateItinerary = (day, business, option) => {
    let editedDay = storedItinerary[day];

    switch (option) {
        case "breakfast":
          editedDay.breakfast = business;
          break;
        
        case "activityOne":
          editedDay.activityOne = business;
          break;
      
        case "lunch":
          editedDay.lunch = business;
          break;
      
        case "activityTwo":
          editedDay.activityTwo = business;
          break;
      
        case "dinner":
          editedDay.dinner = business;
          break;
      
        case "nightLife":
          editedDay.nightLife = business;
          break;
      
        default:
          console.log("Could not find relevant itinerary option to update.");
      }

      storedItinerary[day] = editedDay;
}

app.post('/send-info', async(req, res) => { 
    try{
        const { sentLoc, sentStart, sentEnd } = req.body;
        location = sentLoc;
        startDate = new Date(sentStart);
        endDate = new Date(sentEnd);
        res.json({ status: 'success' });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/build-itinerary', async(req,res)=> {
    console.log("")
    const results = await buildItinerary();
    storedItinerary = results;
    res.send(results)
});

app.get('/get-itinerary', async(req,res)=> {
    res.send(storedItinerary);
});

app.get('/otherOptions', async(req,res)=> {
    const results = await buildItinerary();
    console.log(otherOptions)
    res.send(otherOptions)
});

app.get('/dates', async(req,res) => {
    const dates = {
        start: startDate,
        end: endDate
    }

    res.send(dates);
})

app.post('/edits', async(req, res) => {
    try{
        const { dayNum, business, option} = req.body;
        updateItinerary(dayNum, business, option);
    }catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });