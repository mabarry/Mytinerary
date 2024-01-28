import React, { useEffect, useState } from "react";
import "./EditOptions.css";
import Option from "./components/Option";
import { Helmet } from "react-helmet";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditOptions(eventType) {
  const navigate = useNavigate();
  
  const[optionList, setOptionList] = useState([])

  const getOtherOptions = async () => {
    try {
        const response = await axios.get('http://localhost:4000/otherOptions');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const buildList = async () => {
    let tempList = []
    const results = await getOtherOptions();
    if(true) {
        for (let i = 0; i < results.breakfast.length; i++) {
            tempList.push(<Option onClick={handleOptionClick} optionInfo={results.breakfast[i]} key={i}/>)
        }
    }
    setOptionList(tempList)
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionData) => {
    setSelectedOption(optionData);
  };

  useEffect(()=>{buildList()},[])

  return (
    <>
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
    </Helmet>
    <div className="main">
        <div className="edits">
          <div className="info">
            <div className="inner-box">
              {selectedOption ? (
                <div>
                  <img
                    src={selectedOption.image_url}
                    alt={selectedOption.name}
                  />
                  <h2>{selectedOption.name}</h2>
                  <h2 className>{selectedOption.location.display_address.join(', ')}</h2>
                  <div className="rating">
                    <h2>{selectedOption.rating}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#2ac191" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  </div>
                  <h2>{selectedOption.price}</h2>
                  <div className="phone">
                    <h2>{selectedOption.display_phone}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2ac191" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  </div>
                  <button className="confirm-button">Confirm Change</button>
                </div>
              ) : (
                <p>Please make a selection</p>
              )}
            </div>
          </div>
        <div className="selection">
                <h1>Edit Your Selections for</h1>
                <p>Breakfast at 8a</p>
                <div className="options-border">
                    <div className="options">
                        {optionList}
                    </div>
                </div>
                <button className="back-button" onClick={()=>{navigate("/itinerary")}}>Return to itinerary</button>
            </div>
      </div>
    </div>
    </>
  );
}

export default EditOptions;