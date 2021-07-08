import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import Grid from '@material-ui/core/Grid';
import {List, ListItem} from '@material-ui/core'

//axios
import axios from 'axios';
import { asyncify } from 'async';


//renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventoOnClick =>  (cityandcountry, weather) =>{
    const {city, country} = cityandcountry;
    //const {temperature, state} = weather;
        return (
        <ListItem button key = {city} onClick={eventoOnClick}>
            <Grid  container item xs={12} justify="center" alignItems="center">

                <Grid item xs={12}sm={8} >
                    <CityInfo city ={city} country={country} />

                </Grid>
                
                <Grid  item xs={12} md={3} container justify="center">

                    {   weather ? 
                        (<Weather temperature={weather.temperature} weather={weather.state}/>) : ("No hay datos")}
                </Grid>


            </Grid>
        </ListItem>   
        )
}
const CityList = ({cities, onClickCity}) => {
    const [allweather, setAllweather] = useState({});
    console.log(allweather);
    useEffect(() => {
        const getWeather = (city, country) =>{
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd64f4eb49f4e8de11eb5a1729cd49b3`)
                                .then(({data}) => {
                                    const temperature = data.main.temp;
                                    const propName = `${city} - ${country}`;
                                    const state = "sunny";
                                    const propValue  = {temperature, state}
                                    setAllweather(allweather => ({...allweather , [propName] : propValue})) // al agregar allweather al setAllweather, lo que hace es que
                                    //directamente estamos haciendo referencia a su estado y ya no es necesario ponerlo en el arreglo de depencencias
                                    //si solo lo pusieras en el arreglo de dependecias, como estaria cambiando se volver a ejecutar el efecto y se haria un bucle en la funcion
                                    //que nos trae la data, con esto eliminamos esa invocacion de manera inecesario y evitas una fuga de memoria
                                })
                                .catch(console.log)
        }

        cities.forEach(({city, country}) => getWeather(city, country));

        
    }, [cities])

    console.log(allweather);

    const weather = {temperature: 10, state: 'sunny'}
    return (
        <List>
            {
                cities.map((city,i) => renderCityAndCountry(onClickCity)(city, allweather[`${city.city} - ${city.country}`]))   
            } 
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        country:  PropTypes.string
    })).isRequired, //ptar
    onClickCity:PropTypes.func.isRequired,//ptfr
}

export default CityList
