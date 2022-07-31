import '../../styles/currentStatus.scss';

function CurrentStatus({currentStatusData, currentSearchData, currentUnit}) {
    const {unit, calculateTemp} = currentUnit;
    const {label} = currentSearchData;
    const {temp, weather, wind_speed, humidity, pressure, visibility, feels_like} = currentStatusData.current;
    const iconSrc = weather[0].icon + ".png";
    const weatherDescription = weather[0].description;
    console.log(currentStatusData);
    return(
        <div className="status container">
            <p className=''>CURRENT WEATHER</p>
            <div className='status_location'>
                <img className="icon_location" src="map.png" alt="icon location"></img>
                <p className="status_text">{label}</p>
            </div>
            <div className="status_wrapper">
                    <img className="icon_status" alt="icon current weather" src={iconSrc}/>
                <p className='status_temp'>{calculateTemp(temp, unit)}°</p>
                <div className="status_info">
                    <p className="status_description">{weatherDescription}</p>
                    <p className="status_description">Feels like {calculateTemp(feels_like, unit)}°</p>
                </div>
            </div>
            <div className='status_list'>
                <div className='status_list_box'>
                    <img src="wind.png" alt="icon" className='icon_location'></img>
                    <p className='status_list_name'>Wind</p>
                    <p className='status_list_value'>{wind_speed} km/h</p>
                </div>
                <div className='status_list_box'>
                    <img src="humidity.png" alt="icon" className='icon_location'></img>
                    <p className='status_list_name'>Humidity</p>
                    <p className='status_list_value'>{humidity} %</p>
                </div>
                <div className='status_list_box'>
                    <img src="pressure.png" alt="icon" className='icon_location'></img>
                    <p className='status_list_name'>Pressure</p>
                    <p className='status_list_value'>{pressure} hPa</p>
                </div>
                <div className='status_list_box'>
                    <img src="field-of-view.png" alt="icon" className='icon_location'></img>
                    <p className='status_list_name'>Visiblity</p>
                    <p className='status_list_value'>{visibility} km</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentStatus;