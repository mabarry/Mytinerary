import React, { useState } from "react";
import "./EditOptions.css";
import Option from "./components/Option";
import { Helmet } from "react-helmet";
import axios from 'axios';
import { useEffect } from "react";

function EditOptions(eventType) {
    /*
        {
        id: 'lfwzj3hKknLkWk4StJEfQA',
        alias: 'la-panadería-san-antonio-7',
        name: 'La Panadería',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/2di0R6hsWobQPGs3UJZiEA/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/la-panader%C3%ADa-san-antonio-7?adjust_creative=t2Xswg8ijlbmPOQYGvfnBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=t2Xswg8ijlbmPOQYGvfnBg',
        review_count: 2287,
        categories: [Array],
        rating: 4.5,
        coordinates: [Object],
        transactions: [Array],
        price: '$$',
        location: [Object],
        phone: '+12105926264',
        display_phone: '(210) 592-6264',
        distance: 7915.80750923748
        }
    */
  
  const[optionList, setOptionList] = useState([])

  const getOtherOptions = async () => {
    try {
        const response = await axios.get('http://localhost:4000/read-file/Vibify_Database.csv');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const buildList = async () => {
    let tempList = []
    const results = await getOtherOptions();
    if(true) {
        for (let item in results) {
            tempList.append(<Option onClick={handleOptionClick} optionInfo={item}/>)
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
                  <h2>{selectedOption.location}</h2>
                  <div className="rating">
                    <h2>{selectedOption.rating}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#2ac191" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  </div>
                  <h2>{selectedOption.price}</h2>
                  <h2>{selectedOption.display_phone}</h2>
                  <button className="confirm-button">Confirm Change</button>
                </div>
              ) : (
                <p>Please make a selection</p>
              )}
            </div>
          </div>
        <div className="selection">
                <h1>Edit Your Selections</h1>
                <p>Breakfast</p>
                <div className="options-border">
                    <div className="options">
                        {optionList}
                    </div>
                </div>
            </div>
      </div>
    </div>
    </>
  );
}

export default EditOptions;