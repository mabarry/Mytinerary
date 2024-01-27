import "./LandingPage.css";
function LandingPage() {
    return(
        <div className="main">
            <div className="box">
                <div className="logo"></div>
                <span>Plan Your Trip Now</span>
                <input className="dest" placeholder="Enter Destination..."></input>
                <input className="date" placeholder="Enter Trip Dates..."></input>
                <button className="submit">GO</button>
            </div>
            <div className="blur"></div>
        </div>
    )
};

export default LandingPage;