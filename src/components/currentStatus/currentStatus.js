import '../../styles/currentStatus.scss';

function CurrentStatus({currentStatusData, currentSearchData}) {
    const {label} = currentSearchData;
    const {temp, weather} = currentStatusData.current;
    console.log(currentStatusData);
    return(
        <div className="status">
            <p className="status_location">{label}</p>
            <div className="status_temp">
                <h1>{Math.floor(temp - 273.15)}°</h1>
            </div>
            <div className="status_info">
                <p className="status_description">{weather[0].description}</p>
            </div>
        </div>
    )
}

export default CurrentStatus;