import React, { memo, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, AlertTitle } from '@material-ui/lab';
import {List, ListItem} from '@material-ui/core'

import useCityList from '../../hooks/useCityList';
import { getCityCode } from '../../helpers/geocity';
import CitylistItem from '../CityListItem/CitylistItem';

//context
import {WeatherStateContext, WeatherDispatchContext} from '../../context/WeatherContext'
import { useWeather } from '../../hooks/useWeather';





//renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventoOnClick =>  (cityandcountry, weather) =>{
    const {city} = cityandcountry;
    //const {temperature, state} = weather;
    return (
                <CitylistItem  key = {city}  {...cityandcountry} eventoOnClick ={eventoOnClick} weather={weather}/>
        )
    }
    const CityList = memo(({cities, onClickCity}) => {
        //Context  HOC
        /* const {allweather} = useContext(WeatherStateContext);
        const actions = useContext(WeatherDispatchContext); */
        const [{allweather}, dispatch] =  useWeather(); //UNA SOLA LINEA

        
            
        const [ error, setError] = useCityList(dispatch, allweather);
        
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
});

CitylistItem.displayName = 'PUTOOO'

/* CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        country:  PropTypes.string,
        countryCode: PropTypes.string
    })).isRequired, //ptar
    onClickCity:PropTypes.func.isRequired,//ptfr
} */

export default CityList
