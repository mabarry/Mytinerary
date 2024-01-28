import "./style1.css";
import Session from "./Session";

function Schedule() {
    return(
        <div className="main2">
            <div className="title">
                <h2> Itinerary </h2>
                <h4>Click on any activity to edit the selection</h4>
            </div>
            <div class="schedule">

            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-1"}}>Monday</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-2"}}>Tuesday</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-3"}}>Wednesday</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-4"}}>Thursday</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-5"}}>Friday</span>

            <h3 class="time-slot" style={{gridRow: "time-0800"}}>8:00am</h3>
            <div class="session session-1 track-1" style={{gridColumn: "track-1", gridRow: "time-0800 / time-0900"}}>
                <h3 class="session-title"><a href="https://www.google.com">Resturaunt Name</a></h3>
                <span class="session-time">8:00 - 9:00</span>
                <span class="session-address">Address: 1</span>
                <span class="session-activity">Breakfast</span>
            </div>
            
            <div class="session session-2 track-2" style={{gridColumn: "track-2", gridRow: "time-0800 / time-0900"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 9:00</span>
                <span class="session-address">Address: </span>
                <span class="session-activity">Activity</span>
            </div>  
            
            <div class="session session-3 track-3" style={{gridColumn: "track-3", gridRow: "time-0800 / time-0900"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 9:00</span>
                <span class="session-address">Address: </span>
                <span class="session-activity">Activity</span>
            </div>
            
            <div class="session session-4 track-4" style={{gridColumn: "track-4", gridRow: "time-0800 / time-0900"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 9:00</span>
                <span class="session-address">Address: </span>
                <span class="session-activity">Activity</span>
            </div>

            <div class="session session-5 track-5" style={{gridColumn: "track-5", gridRow: "time-0800 / time-0900"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 8:00</span>
                <span class="session-address">Address: </span>
                <span class="session-activity">Activity</span>
            </div>
            
            <h3 class="time-slot" style={{gridRow: "time-0900"}}>9:00am</h3>

            <div class="session session-6 track-2" style={{gridColumn: "track-2", gridRow: "time-0900 / time-1100"}}>
                <h3 class="session-title"><a href="#">Restaurant Name</a></h3>
                <span class="session-time">9:00 - 11:00</span>
                <span class="session-address">Address: 1</span>
                <span class="session-activity">Breakfast</span>
            </div>

            <div class="session session-7 track-3" style={{gridColumn: "track-3", gridRow: "time-0900 / time-1000"}}>
                <h3 class="session-title"><a href="#">Restaurant Name</a></h3>
                <span class="session-time">9:00 - 10:00</span>
                <span class="session-address">Address: 1</span>
                <span class="session-activity">Breakfast</span>
            </div>

            <Session trackNum={1} time={'time-0900 / time-1000'} sessionTime={"9AM"} businessInfo={{}} activity={"Hot Yoga"} />

            <h3 class="time-slot" style={{gridRow: "time-1000"}}>10:00am</h3>
            
            <h3 class="time-slot" style={{gridRow: "time-1100"}}>11:00am</h3>

            <h3 class="time-slot" style={{gridRow: "time-1200"}}>12:00pm</h3>
            
            <h3 class="time-slot" style={{gridRow: "time-1300"}}>1:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-1400"}}>2:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-1500"}}>3:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-1600"}}>4:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-1700"}}>5:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-1800"}}>6:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-1900"}}>7:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-2000"}}>8:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-2100"}}>9:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-2200"}}>10:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-2300"}}>11:00pm</h3>

            <h3 class="time-slot" style={{gridRow: "time-2400"}}>12:00pm</h3>

            {/* <!-- Sessions 6, 7, 8 --> */}

            </div> {/*<!-- end .schedule -->*/}
        </div>
    )
};

export default Schedule;