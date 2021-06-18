import React from 'react';
//Componets
import CityList from './components/CityList';
import Forecats from './components/Forecast/Forecats';
import ForecastChart from './components/ForecastChart';
//import ForecastItem from './components/ForecastItem';

//Data
import { cities } from './helpers/cities';
import { data } from './helpers/datafc';
import {list} from './helpers/forecastList'
import { AppRouter } from './router/AppRouter';





const App = () => {
  const hola = () => console.log('Click jaja');
  return (

    <AppRouter/>
    
      
  )
}


export default App
