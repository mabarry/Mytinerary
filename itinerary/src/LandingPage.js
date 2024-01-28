import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import axios from 'axios';
import "./LandingPage.css";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "./components/Logo"
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const handleChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleLocationChange = (event) =>{
        setLocation(event.target.value);
    }

    const navigate = useNavigate();
    const handleClick = async () => {
        try{
            console.log("TRYING TO SEND TO POST")
            console.log(location)
            const response = await axios.post('http://localhost:4000/send-info', {
                sentLoc: location,
                sentStart: startDate,
                sentEnd: endDate,
            });
            navigate('/itinerary');
            console.log('Response from backend:', response.data);

        }catch (error) {
            console.error('Error loading itinerary:', error);
        }
        
    };

    return (
        <>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="main">  
            <div className="box">
                <Logo />
                <span className="serviceName">Mytinerary</span>
                <span className="text">Plan Your Trip Now</span>
                <div className="dest-flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#2ac191" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <input className="dest" placeholder="Enter Destination..." onChange={handleLocationChange}/>
                </div>
                <div className="date-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#2ac191" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                    <DatePicker
                        className="datepicker"
                        selected={startDate}
                        onChange={handleChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        placeholderText="Enter Date Range..."
                    />
                </div>
                <button className="submit" onClick={handleClick}>GO</button>
            </div>
            <div className="blur"></div>
        </div>
        </>
    );
}

export default LandingPage;