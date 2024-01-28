const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const fetch = require("node-fetch");
require('dotenv').config();



const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:4000' }));

const apiKey = process.env.YELP_API_KEY;
let location = "San Antonio"
let dates = ""



const getBreakfast = async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const apiURL = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=breakfast&sort_by=best_match&limit=20`;
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

const getLunch = async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const apiURL = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=lunch&sort_by=best_match&limit=20`;
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

const getDinner = async () => {
    try{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const apiURL = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=dinner&sort_by=best_match&limit=20`;
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

app.post('/send-info', async(req, res)=> { 
    const { sentLoc, sentDate } = req.body;
    location = sentLoc;
    dates = sentDate;
});

app.get('/itinerary', async(req,res)=> {
    const results = await getBreakfast();
    console.log("HERE COMES THE RESULTS")
    console.log(results)
    res.send(results)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });