import { useState } from "react";
import "./Session.css"

const Session = ({time, businessInfo, activity}) => {
    

    return (
        <div className="option-container">
            <div className="time">8AM</div>
            <img className="business-logo" src={require('../images/logo.png')} style={{height: "60px"}}/>
            <div className="title-box">
                <p>TITLE OF THE BUSINESS</p>
            </div>
        </div>
    );
}

export default Session;
