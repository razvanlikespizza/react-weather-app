import React, {useState, useEffect} from 'react';
import Search from  './components/search/search';
import CurrentStatus from './components/currentStatus/currentStatus';
import Sun from './components/sun/sun';
import Alert from './components/alert/alert';
import HourlyForecast from './components/hourlyForecast/hourlyForecast';
import Forecast from './components/forecast/forecast';
import ChangeUnit from './components/changeUnit/changeUnit';

import './styles/App.scss';

function App() {
  let [currentStatusData, setCurrentStatusData] = useState(false);
  let [currentSearchData, setCurrentSearchData] = useState({value: {lat: 0, lon: 0}, label: "Unknown"});
  let [currentUnit, setCurrentUnit] = useState({
      unit: "c", 
      calculateTemp: (kelvin, unit) => {
        if(unit === "c"){
            return Math.floor(kelvin - 273.15);
        } else {
          return Math.floor(1.8 * (kelvin - 273.15) + 32);
        }
    }}
  );
  
  const changeUnit = (e) => {
    if(currentUnit.unit === "c"){
      setCurrentUnit({...currentUnit, unit: "f"});
    } else {
      setCurrentUnit({...currentUnit, unit: "c"});
    }
    console.log(currentUnit);
  }

  function getWeatherInfo(data){
    setCurrentSearchData(data);
    let {lat, lon} = data.value;
    fetch(`/api/openweathermap?lat=${lat}&lon=${lon}`)
      .then((response) => {
        return response.json();
      })
      .then(result => {
        setCurrentStatusData(result);
      });
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
        <ChangeUnit changeUnit={changeUnit} currentUnit={currentUnit}/>
      </div>
      <div className='app_container'>
        <div className='left'>
          {currentStatusData.current && <CurrentStatus currentStatusData={currentStatusData} currentUnit={currentUnit} currentSearchData={currentSearchData}/>}
          {currentStatusData.alerts && <Alert currentStatusData={currentStatusData}/>}
          {currentStatusData && <Sun currentStatusData={currentStatusData}/>}
        </div>
        <div className='right'>
          {currentStatusData.hourly && <HourlyForecast currentStatusData={currentStatusData} currentUnit={currentUnit}/>}
          {currentStatusData.daily && <Forecast currentStatusData={currentStatusData} currentUnit={currentUnit}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
