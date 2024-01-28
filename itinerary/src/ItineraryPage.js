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
            <div className="itinerary-box">
                <div className="iten-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#2ac191" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                    <h1>Here is your Generated Itinerary</h1>
                </div>
                
                <div className="schedule-box">
                    <Schedule />
                </div>
            </div>
        </div>
    </>
    )
};

export default ItineraryPage;