import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import {List, ListItem} from '@material-ui/core'

import useCityList from '../../hooks/useCityList';
import { getCityCode } from '../../helpers/geocity';


//renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventoOnClick =>  (cityandcountry, weather) =>{
    const {city, country} = cityandcountry;
    //const {temperature, state} = weather;
    return (
        <ListItem button key = {city} onClick={eventoOnClick}>
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
    }
    const CityList = ({cities, onClickCity, actions,data}) => {
        
        const   { allweather } = data
        const {onsetAllweather} = actions
            
        const [ error, setError] = useCityList(onsetAllweather, allweather);
        
    return (
        <>
        {
            error && <Alert severity="error" onClose={() => setError(null)} ><AlertTitle>{error}</AlertTitle></Alert>
        }
        <List>
          {  
                cities.map((city,i) => renderCityAndCountry(() => onClickCity(city.city, city.countryCode))(city, allweather[getCityCode(city.city, city.countryCode)]))   
            }  
        </List>
        </>
    )
}

/* CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        country:  PropTypes.string,
        countryCode: PropTypes.string
    })).isRequired, //ptar
    onClickCity:PropTypes.func.isRequired,//ptfr
} */

export default CityList
