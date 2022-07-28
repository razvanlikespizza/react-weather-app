import './../../styles/HourlyForecast.scss';

function HourlyForecast({currentStatusData}){
    const {hourly} = currentStatusData;
    let arr = [];
    for(let i = 1; i <= 12 && i <= hourly.length; i++){
        arr.push({
            dt: new Date((hourly[i].dt) * 1000),
            temp: hourly[i].temp,
            weather: hourly[i].weather,
        });
    }
    return(
        <div className="hourlyforecast">
            {arr.map((el, idx) => {
                return(<div className="hourlyforecast_box">
                    <p className="hourlyforecast_text">{el.dt.toLocaleString('en-US', { hour: 'numeric', hour12: true })}</p>
                    <img className="hourlyforecast_img" alt="icon" src={"https://openweathermap.org/img/wn/" + hourly[idx].weather[0].icon + ".png"}></img>
                    <p className="hourlyforecast_text">{Math.floor(el.temp - 273)}°</p>
                </div>)
            })} 
        </div>
    )
}
export default HourlyForecast;