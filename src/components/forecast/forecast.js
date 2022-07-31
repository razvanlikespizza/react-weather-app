import './../../styles/Forecast.scss';


function Forecast({currentStatusData}){
    return(
        <div className='forecast_container container'>
            <p>10 Day Forecast</p>
            <div className="forecast">
                {currentStatusData.daily.map((el, idx) => {
                    console.log(el.dt);
                    let d = new Date(el.dt * 1000);
                    return(
                        <div key={idx} className="forecast_section">
                            <p className="forecast_day">{d.toLocaleString('en-US', { weekday: 'short' })}</p>
                            <img src={"https://openweathermap.org/img/wn/" + el.weather[0].icon + ".png"} alt="icon"></img>
                            <p className="forecast_min_temp">{Math.floor(el.temp.min - 273,5)}°</p>
                            <p className="forecast_day_temp">{Math.floor(el.temp.day - 273,5)}°</p>
                            <p className="forecast_description">{el.weather[0].main}</p>
                        </div>
                    )
                })}            
            </div>
        </div>
    )
}

export default Forecast;