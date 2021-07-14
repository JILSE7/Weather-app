import { useEffect, useState, useDebugValue } from 'react';
//params
import { useParams } from 'react-router';
//axios
import axios from 'axios';
import { getUrl } from '../helpers/getUrl';
import getDataAuxCityPage from '../helpers/getDataAuxCityPage';
import getListForecastCityPage from '../helpers/getListForecastCityPage';
import { getCityCode } from '../helpers/geocity';

const useCityPage = ( allDataForecast, allForecastItemList,onSetDataForecast,OnSetForecastItemList) => {
  /*   const [dataForecast, setDataForecast] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null); */
    const {city, countryCode} = useParams();
    
    useDebugValue(`Estoy en mi customHook y puedo mostrar informacion para retroalimentar al programador ${city}`);
    useEffect(() => {
    const url = getUrl('forecast',city, countryCode);
        
        const getForecast = async() => {
            const cityCode = getCityCode(city, countryCode);
            try {
                
                const {data} = await axios.get(url);
                const dataAux = getDataAuxCityPage(data); //helper for dataAux
                onSetDataForecast({[cityCode] : dataAux});

                const listForecatsItemAux = getListForecastCityPage(data);//helper fot ListForecastItemAux
                console.log(listForecatsItemAux);
                OnSetForecastItemList({[cityCode] : listForecatsItemAux});
            } catch (error) {
                console.log(error);
            }
        }
        
        //Condicionando la peticion al servidor
        const cityCode = getCityCode(city, countryCode);
        if(allDataForecast && allForecastItemList && !allDataForecast[cityCode] && !allForecastItemList[cityCode]){

            getForecast();  
        }
        
        
        
    }, [city, countryCode,onSetDataForecast,OnSetForecastItemList, allDataForecast, allForecastItemList]);
    
    //return [dataForecast, forecastItemList, city, countryCode] 
    return [city, countryCode] 
}

export default useCityPage;