import '../../styles/Sun.scss';

function Sun({currentStatusData}) {
    let {sunrise, sunset, uvi} = currentStatusData.current;
    let sunriseDate = new Date(sunrise * 1000);
    let sunsetDate = new Date(sunset * 1000);
    let message = "";
    if(uvi <= 2){
        message = "UV Index is low, SPF protection is not necessary"
    } else if (uvi <= 6) {
        message = "UV Index is high, SPF protection is recommended"
    } else {
        message = "UV Index is very high, stay indoors";
    }
    return(
        <div className="sun_container container">
            <p>Sun</p>
            <div className="sun">
                <div className="sun_box">
                    <img src="sunrise.png" alt="sunrise logo"></img>
                    <p>Sunrise</p>
                    <p>{sunriseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                </div>
                <div className="sun_box">
                    <img src="uv-protection.png" alt="uvindex"></img>
                    <p>UV Index</p>
                    <p>{uvi}</p>
                </div>
                <div className="sun_box">
                    <img src="sunset.png" alt="sunset logo"></img>
                    <p>Sunset</p>
                    <p>{sunsetDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                </div>
            </div>
            <p className='sun_info'>{message}</p>
        </div>
    )
}
export default Sun;