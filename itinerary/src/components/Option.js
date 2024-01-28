import React from "react";
import "./Option.css";

function Option({ onClick }) {
  const optionData = {
    id: 'lfwzj3hKknLkWk4StJEfQA',
    alias: 'la-panadería-san-antonio-7',
    name: 'La Panadería',
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/2di0R6hsWobQPGs3UJZiEA/o.jpg',
    rating: 4.5,
    price: "$$",
    display_phone: '(210) 592-6264'
  };

  const handleOptionClick = () => {
    onClick(optionData);
  };

  return (
    <div className="option-box" onClick={handleOptionClick}>
      <img src={optionData.image_url}  style={{height: "80%", borderRadius: "16px"}}/>
      <h3>{optionData.name}</h3>
      <div className="dest-flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#2ac191" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>  
        <span>{optionData.rating}</span>
      </div>
    </div>
  );
}

export default Option;