import React, { memo } from 'react'

import {ListItem} from '@material-ui/core'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import Grid from '@material-ui/core/Grid';

//areEqual
/* const areEqual = (prev, next) => {
    
    console.log('city', prev.city === next.city);
    console.log('countryCode', prev.countryCode === next.countryCode);
    console.log('country', prev.country === next.country);
    console.log('weather', prev.weather === next.weather);
    console.log('eventoOnClick', prev.eventoOnClick === next.eventoOnClick);

    return false
} */


const CitylistItem = memo(({city, country, eventoOnClick, weather}) => {
    return (
        <ListItem button onClick={eventoOnClick}>
        <Grid  container item xs={12} justifyContent="center" alignItems="center">

            <Grid item xs={12}sm={8} >
                <CityInfo city ={city} country={country} />

            </Grid>
            
         
            <Grid  item xs={12} md={3} container  justifyContent="center">
                
                    <Weather temperature={weather && weather.temperature} weather={weather && weather.state}/>
            </Grid>


        </Grid>
    </ListItem>   
    )
})//areEqual

export default CitylistItem
