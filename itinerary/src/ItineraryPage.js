import Schedule from "./components/schedule";
import "./Itinerary.css"
import { Helmet } from "react-helmet";

function ItineraryPage() {
    return(
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
            </div>
                </div>
                <div className="selection">
                        <h1>Review your itinerary for</h1>
                        <p>DayOfWeek, DD/MM</p>
                        <div className="options-border">
                            <div className="options">
                            </div>
                        </div>
                    <button className="next-button">Next Day</button>
                    
                </div>
            </div>
        </div>
        </>
    )
};

export default ItineraryPage;