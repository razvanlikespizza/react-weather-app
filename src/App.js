import React, {useState, useEffect} from 'react';
import Search from  './components/search/search';
import CurrentStatus from './components/currentStatus/currentStatus';
import Alert from './components/alert/alert';
import HourlyForecast from './components/hourlyForecast/hourlyForecast';
import Forecast from './components/forecast/forecast';

import './styles/App.scss';
import ChangeUnit from './components/changeUnit/changeUnit';

function App() {
  let [currentStatusData, setCurrentStatusData] = useState(false);
  let [currentSearchData, setCurrentSearchData] = useState({value: {lat: 0, lon: 0}, label: "Unknown"});
  let [currentUnit, setCurrentUnit] = useState({value: "c"});
  
  async function getWeatherInfo(data){
    setCurrentSearchData(data);
    let {lat, lon} = data.value;
    let result = await
       fetch(`/api/openweathermap?lat=${lat}&lon=${lon}`)
      .then((response) => {
        return response.json();
      });
    setCurrentStatusData(result);
  }
  useEffect(() => {
    fetch("/api/ip")
    .then(data => data.json())
    .then(data => {
      getWeatherInfo({
        value: {
          lat: data.lat,
          lon: data.lon
        },
        label: data.regionName
      });
    });
  }, []);
  return (
    <div className="App">
      <div className='top'>
      <Search getWeatherInfo={getWeatherInfo}/>
      <ChangeUnit/>
      </div>
      {currentStatusData && <CurrentStatus currentStatusData={currentStatusData} currentSearchData={currentSearchData}/>}
      {currentStatusData.alerts && <Alert currentStatusData={currentStatusData}/>}
      {currentStatusData.hourly && <HourlyForecast currentStatusData={currentStatusData}/>}
      {currentStatusData.daily && <Forecast currentStatusData={currentStatusData}/>}
    </div>
  );
}

export default App;
