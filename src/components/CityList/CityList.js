import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import {List, ListItem} from '@material-ui/core'

//axios
import axios from 'axios';

//Convert Units
import convert from 'convert-units';

const getCityCode = (city, countryCode) => `${city} - ${countryCode}`

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
const CityList = ({cities, onClickCity}) => {
    
    const [allweather, setAllweather] = useState({});
    const [error, setError] = useState(null)
    
    console.log(allweather);
    useEffect(() => {
        const getWeather = async(city, countryCode) =>{
            try {
                
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}, ${countryCode}&appid=d65500d1eac223e1ff9e9839574a0f06 `)
                
                            // .then(({data}) => {
                                const temperature = convert(data.main.temp).from('K').to('C').toFixed(1) + "°c";
                                const propName = getCityCode(city, countryCode)
                                const state = data.weather[0].main.toLowerCase();
                                const propValue  = {temperature, state}
                                setAllweather(allweather => ({...allweather , [propName] : propValue})) // al agregar allweather al setAllweather, lo que hace es que
                                //directamente estamos haciendo referencia a su estado y ya no es necesario ponerlo en el arreglo de depencencias
                                //si solo lo pusieras en el arreglo de dependecias, como estaria cambiando se volver a ejecutar el efecto y se haria un bucle en la funcion
                                //que nos trae la data, con esto eliminamos esa invocacion de manera inecesario y evitas una fuga de memoria
                            //})
            } catch (error) {
                
                //  .catch(error => {
                      
                      if(error.response){ //Errores que responde el servidor
                          const {data, status} = error.response;
                          setError('Ha ocurrido un error en el servidor del clima', status);
                      }else if(error.request){ //Errores que no llegan al servidor, puede ser por el internet
                          console.log('Servidor innaccecible o no hay conexion a internet');
                          setError('Verifique su conexion a interntet');
                      }else{//Errores imprevistos
                              console.log('errores imprevistos');
                              setError('Error al cargar los datos')
                      }

                      
                  //}) 
            }
        }

        cities.forEach(({city, countryCode}) => getWeather(city, countryCode));

        
    }, [cities])

    

    
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

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        country:  PropTypes.string,
        countryCode: PropTypes.string
    })).isRequired, //ptar
    onClickCity:PropTypes.func.isRequired,//ptfr
}

export default CityList
