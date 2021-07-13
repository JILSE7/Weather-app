import React, { useEffect, useMemo, useState } from 'react'
import AppFrame from '../components/AppFrame';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/weatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'

import Forecats from '../components/Forecast/Forecats'
//CustomHooks
import useCityPage from '../hooks/useCityPage';
import useCityList from '../hooks/useCityList'
import CircularStatic from '../components/CircularProgressWithLabel';
import { getCityCode } from '../helpers/geocity';
import { getCountryName } from '../helpers/cities';
//import ProgressBar from '../components/ProgressBar'

const City = ({allweather,onsetAllweather}) => {

    const [dataForecast, forecastItemList, city, countryCode] = useCityPage();
    
            //useCityList(onsetAllweather, allweather);
    
    console.log(allweather);
    const weather2 = allweather[getCityCode(city, countryCode)]
    console.log(weather2);
    
    //CityLIst
    //const city = 'CDMX';
    const country = getCountryName(countryCode);

    //Weather
    const temperature = weather2?.temperature;
    const weather = weather2?.state;

    //WeatherInfo
    const humidity = weather2?.humidity;
    const wind = weather2?.wind;

    //const CircularProgressWithLabel = CircularStatic()



    return (
        <AppFrame>
        <Grid container
            justify="space-around"
            direction="column"
            spacing={2}>
            <Grid item container 
                xs={12} 
                justify="center"
                alignItems="flex-end">
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid container item xs={12}
                justify="center">
                <Weather weather={weather} temperature={temperature} />
                {
                    humidity && wind && 
                    <WeatherDetails 
                        humidity={humidity} 
                        wind={wind} />
                }
            </Grid>
            <Grid item>
                {
                    !dataForecast && !forecastItemList && <LinearProgress />
                }
            </Grid>
            <Grid item>
                {
                    dataForecast && <ForecastChart data={dataForecast} />
                }
            </Grid>
            <Grid item>
                {
                    forecastItemList && <Forecats forecastItemList={forecastItemList} />
                }
            </Grid>
        </Grid>        
    </AppFrame>
    )
}



export default City
