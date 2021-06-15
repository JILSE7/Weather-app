import React from 'react';
import CityList from './components/CityList';
import Forecats from './components/Forecast/Forecats';
import ForecastItem from './components/ForecastItem/ForecastItem';
import { cities } from './helpers/cities';
import {list} from './helpers/forecastList'

const App = () => {
  const hola = () => console.log('Click jaja');
  return (
    <div>
      <CityList cities={cities} onClickCity={hola}/>
      <Forecats forecastItemList={list} />
    </div>
  )
}


export default App
