const Session = (trackNum, time, sessionTime, businessInfo, activity) => {
    const track = "track-" + trackNum;
    const className = "session" + track;
    const businessData = {
        name: "Event",
        address: "Your Moms House, El Paso, TX"
    }

    return (
        <div className={className} style={{
            paddingTop: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "5px",
            fontSize: "14px",
            color: '#fff',
            gridColumn: {track},
            gridRow: {time},
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(42,193,145)",
            padding: "1%",
            alignItems: "center",
            boxShadow: "rgba(255, 255, 255, .6) 1px 1px 4px 0, rgba(0, 0, 0, .3) 2px 2px 4px 0"
        }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: "5px", marginRight: "5px" }}>
                <div style={{ display: "flex", alignItems: "center", marginTop: "-35px" }}>
                    <h3 className="session-title" style={{ color: "#363062", textDecoration: "underline", marginBottom: "5px" }}>{businessData.name}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: "#363062", width: "15px", height: "15px", marginLeft: "3px", marginBottom: "2px" }}>
                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                    </svg>
                </div>
                <span className="session-time">{sessionTime}</span>
                <span className="session-address">{businessData.address}</span>
                <span className="session-activity">{activity}</span>
            </div>
        </div>
    );
}

export default Session;
