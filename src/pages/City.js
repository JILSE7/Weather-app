import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
import { Grid } from '@material-ui/core'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/weatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import { data } from '../helpers/datafc'
import Forecats from '../components/Forecast/Forecats'
import { list } from '../helpers/forecastList'

const City = props => {
    //CityLIst
    const city = 'CDMX';
    const country = "México";

    //Weather
    const temperature = '20';
    const weather = 'cloudy';

    //WeatherInfo
    const humidity = 40;
    const wind = 20;


    return (
       <Grid container justify="center" spacing={2} alignItems="center">
           <Grid container item justify="center" alignItems="flex-end" xs={12} sm={11} md={10} lg={8}>
               <CityInfo city={city} country={country}/>
           </Grid >
            <Grid container item direction="row" xs={12} justify="center" alignItems="center">
                    <Weather weather={weather} temperature={temperature}/>
                    <WeatherDetails humidity={humidity} wind={wind} />
               
            </Grid>
            <Grid item xs={12} >
                <ForecastChart data={data}/>
            </Grid>
            <Grid item xs={12}>
                <Forecats forecastItemList={list}/>
            </Grid>

       </Grid>
    )
}

City.propTypes = {

}

export default City
