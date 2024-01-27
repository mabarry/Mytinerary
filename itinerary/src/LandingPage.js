import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "./LandingPage.css";
import "react-datepicker/dist/react-datepicker.css";

function LandingPage() {
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const handleChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
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
                <div className="logo"></div>
                <span>Plan Your Trip Now</span>
                <input className="dest" placeholder="  Enter Destination..." />
                <div className="date">
                    <DatePicker
                        className="datepicker"
                        selected={startDate}
                        onChange={handleChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        placeholderText="  Enter date range..."
                    />
                </div>
                <button className="submit">GO</button>
            </div>
            <div className="blur"></div>
        </div>
        </>
    );
}

export default LandingPage;