import "./style1.css";
import Session from "./Session";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Helmet } from "react-helmet";

function Schedule() {
    const [eightAM, setEightAM] = useState([])
    const [tenAM, setTenAM] = useState([])
    const [twelvePM, setTwelvePM] = useState([])
    const [twoPM, setTwoPM] = useState([])
    const [fivePM, setFivePM] = useState([])
    const [ninePM, setNinePM] = useState([])

    const buildSessions = async () => {
        try{        
            const results = await axios.get('http://localhost:4000/build-itinerary');
            const itinerary = results.data;
            let tempEight = [];
            let tempTen = [];
            let tempNoon = [];
            let tempTwo = [];
            let tempFive = [];
            let tempNine = [];
            for(let i = 0; i < itinerary.length; i++){
                tempEight.push(<Session trackNum={i+1} time={'time-0800 / time-1000'} sessionTime={"8AM"} businessInfo={itinerary[i].breakfast} activity={"Breakfast"} />);
                tempTen.push(<Session trackNum={i+1} time={'time-01000 / time-1200'} sessionTime={"10AM"} businessInfo={itinerary[i].activityOne} activity={"First Activity"} />);
                tempNoon.push(<Session trackNum={i+1} time={'time-1200 / time-1400'} sessionTime={"12PM"} businessInfo={itinerary[i].lunch} activity={"Lunch"} />);
                tempTwo.push(<Session trackNum={i+1} time={'time-1400 / time-1500'} sessionTime={"2:30PM"} businessInfo={itinerary[i].activityTwo} activity={"Second Activity"} />);
                tempFive.push(<Session trackNum={i+1} time={'time-1700 / time-1900'} sessionTime={"5PM"} businessInfo={itinerary[i].dinner} activity={"Dinner"} />);
                tempNine.push(<Session trackNum={i+1} time={'time-2100 / time-2400'} sessionTime={"9PM"} businessInfo={itinerary[i].nightLife} activity={"Night Activity"} />);
            }

            setEightAM(tempEight);
            setTenAM(tempTen);
            setTwelvePM(tempNoon);
            setTwoPM(tempTwo);
            setFivePM(tempFive)
            setNinePM(tempNine)  
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{buildSessions()},[])
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
                <h1>Edit Your Selections for</h1>
                <p>Breakfast at 8a</p>
                <div className="options-border">
                    <div className="options">
                    </div>
                </div>
                <button className="back-button">Return to itinerary</button>
            </div>
      </div>
    </div>
    </>
        // <div className="main2">
        //     <div className="title">
        //         <h2> Itinerary </h2>
        //         <h4>Click on any activity to edit the selection</h4>
        //     </div>
        //     <div class="schedule">

        //     <span className="track-slot" aria-hidden="true" style={{gridColumn: "track-1"}}>Monday</span>
        //     <span className="track-slot" aria-hidden="true" style={{gridColumn: "track-2"}}>Tuesday</span>
        //     <span className="track-slot" aria-hidden="true" style={{gridColumn: "track-3"}}>Wednesday</span>
        //     <span className="track-slot" aria-hidden="true" style={{gridColumn: "track-4"}}>Thursday</span>
        //     <span className="track-slot" aria-hidden="true" style={{gridColumn: "track-5"}}>Friday</span>

        //     <h3 className="time-slot" style={{gridRow: "time-0800"}}>8:00am</h3>
        //     {eightAM}
        //     <h2 className="time-slot" style={{gridRow: "time-0900"}}>9:00am</h2>
    
        //     <h2 className="time-slot" style={{gridRow: "time-1000"}}>10:00am</h2>
        //     {tenAM}
        //     <h2 className="time-slot" style={{gridRow: "time-1100"}}>11:00am</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-1200"}}>12:00pm</h2>
        //     {twelvePM}
        //     <h2 className="time-slot" style={{gridRow: "time-1300"}}>1:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-1400"}}>2:00pm</h2>
        //     {twoPM}
        //     <h2 className="time-slot" style={{gridRow: "time-1500"}}>3:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-1600"}}>4:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-1700"}}>5:00pm</h2>
        //     {fivePM}
        //     <h2 className="time-slot" style={{gridRow: "time-1800"}}>6:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-1900"}}>7:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-2000"}}>8:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-2100"}}>9:00pm</h2>
        //     {ninePM}
        //     <h2 className="time-slot" style={{gridRow: "time-2200"}}>10:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-2300"}}>11:00pm</h2>

        //     <h2 className="time-slot" style={{gridRow: "time-2400"}}>12:00pm</h2>

        //     {/* <!-- Sessions 6, 7, 8 --> */}

        //     </div> {/*<!-- end .schedule -->*/}
        // </div>
    )
};

export default Schedule;