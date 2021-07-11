import React, { useEffect, useState } from 'react'


import AppFrame from '../components/AppFrame';
import { Grid } from '@material-ui/core'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/weatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import { data } from '../helpers/datafc'
import Forecats from '../components/Forecast/Forecats'
import { list } from '../helpers/forecastList'

//params
import { useParams } from 'react-router';

//axios
import axios from 'axios';
//moment / español
import moment from 'moment';
import 'moment/locale/es'

//conver-units
import convert from'convert-units'

const City = props => {

    const [dataForecast, setDataForecast] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);
    const {city, countryCode} = useParams();
    
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=d65500d1eac223e1ff9e9839574a0f06`;

        const getForecast = async() => {
            try {
                
                const {data} = await axios.get(url);
                console.log(data);
                const daysAhead = [0,1,2,3,4,5];
                const days =  daysAhead.map(day  => moment().add(day, 'd'));//crea un array de dias desde el dia en el que estamos
                const dataAux = days.map(day => {
                    
                    //min max
                    const tempArray = data.list.filter(tem  => {
                        const dayOfYear = moment.unix(tem.dt).dayOfYear(); // convertimos la fecha en unix en dia del año

                        return dayOfYear === day.dayOfYear();
                        
                    });

                    console.log(tempArray, day.format('ddd'));
                    const temps = tempArray.map(item => item.main.temp)

                    //const ultimo = temps.length - 1
                    return ({
                        dayHour: day.format('ddd'),
                        min:  (temps.length > 1) ?Number(convert(Math.min(...temps) ).from('K').to('C').toFixed(0))  : 0,     //temps.sort()[0],
                        máx:  (temps.length > 1) ? Number(convert(Math.max(...temps) ).from('K').to('C').toFixed(0)): 0 //temps.sort()[ultimo]
                    })
                })

               
                
                setDataForecast(dataAux);

                //{hour : 18, state: 'clouds', temperature: 17, weekDay: 'Jueves'}
                const interval = [4,8,12,16,20,24];

                const listForecatsItemAux = data.list.filter((item, index) => interval.includes(index)) // extrae estas posiciones del arreglo lista
                                                                                        .map(i =>{
                                                                                            return({
                                                                                                hour : moment.unix(i.dt).hour(),
                                                                                                weekDay: moment.unix(i.dt).format('dddd'),
                                                                                                state: i.weather[0].main.toLowerCase(),
                                                                                                temperature:  convert(i.main.temp ).from('K').to('C').toFixed(0)
                                                                                            })
                                                                                        })
                console.log(listForecatsItemAux);
                setForecastItemList(listForecatsItemAux)
            } catch (error) {
                console.log(error);
            }
        }
        
        getForecast();  
        
        
        
    }, [city, countryCode]);
    
    
    console.log(dataForecast);
    
    //CityLIst
    //const city = 'CDMX';
    const country = "México";

    //Weather
    const temperature = '20';
    const weather = 'clouds';

    //WeatherInfo
    const humidity = 40;
    const wind = 20;


    return (
        <AppFrame>
       <Grid container justifyContent="center" spacing={2} alignItems="center">
           <Grid container item justifyContent="center" alignItems="flex-end" xs={12} sm={11} md={10} lg={8}>
               <CityInfo city={city} country={country}/>
           </Grid >
            <Grid container item direction="row" xs={12} justifyContent="center" alignItems="center">
                    <Weather weather={weather} temperature={temperature}/>
                    <WeatherDetails humidity={humidity} wind={wind} />
               
            </Grid>
            <Grid item xs={12} >
                <ForecastChart data={dataForecast}/>
            </Grid>
            <Grid item xs={12}>
                <Forecats forecastItemList={forecastItemList}/>
            </Grid>

       </Grid>
       </AppFrame>
    )
}



export default City
