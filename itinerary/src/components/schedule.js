import "./style1.css";
function Schedule() {
    return(
        <div className="main2">
            <h2> Itinerary </h2>
            <div class="schedule">

            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-1"}}>Track 1</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-2"}}>Track 2</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-3"}}>Track 3</span>
            <span class="track-slot" aria-hidden="true" style={{gridColumn: "track-4"}}>Track 4</span>

            <h3 class="time-slot">8:00am</h3>
            <div class="session session-1 track-1" style={{gridColumn: "track-1", gridRow: "time-0800 / time-0900"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 9:00</span>
                <span class="session-track">Track: 1</span>
                <span class="session-presenter">Presenter</span>
            </div>
            
            <div class="session session-2 track-2" style={{gridColumn: "track-2", gridRow: "time-0800 / time-0830"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 8:30</span>
                <span class="session-track">Track: 2</span>
                <span class="session-presenter">Presenter</span>
            </div>  
            
            <div class="session session-3 track-3" style={{gridColumn: "track-3", gridRow: "time-0800 / time-0830"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 8:30</span>
                <span class="session-track">Track: 3</span>
                <span class="session-presenter">Presenter</span>
            </div>
            
            <div class="session session-4 track-4" style={{gridColumn: "track-4", gridRow: "time-0800 / time-1000"}}>
                <h3 class="session-title"><a href="#">Talk Title</a></h3>
                <span class="session-time">8:00 - 10:00</span>
                <span class="session-track">Track: 2</span>
                <span class="session-presenter">Presenter</span>
            </div>

            {/* <!-- Sessions 2, 3, 4 --> */}

            <h3 class="time-slot">9:00am</h3>
            <div class="session session-5 track-1">
                <span class="session-title"><a href="#">Session Title</a></span>
                <span class="session-time">9:00am - 10:00am</span>
                <span class="session-track">Track 1</span>
                <span class="session-presenter">Presenter Name</span>
            </div>

            {/* <!-- Sessions 6, 7, 8 --> */}

            </div> {/*<!-- end .schedule -->*/}
        </div>
    )
};

export default Schedule;