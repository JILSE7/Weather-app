import { useEffect, useState, useDebugValue } from 'react';
//params
import { useParams } from 'react-router';
//axios
import axios from 'axios';
import { getUrl } from '../helpers/getUrl';
import getDataAuxCityPage from '../helpers/getDataAuxCityPage';
import getListForecastCityPage from '../helpers/getListForecastCityPage';
import { getCityCode } from '../helpers/geocity';

const useCityPage = ( allDataForecast, allForecastItemList,actions) => {
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
                    //console.log(dataAux);
                //onSetDataForecast({[cityCode] : dataAux}); //remplazo por actions
                actions({type : 'SET_DATA_FORECAST', payload: {[cityCode] : dataAux}})

                const listForecatsItemAux = getListForecastCityPage(data);//helper fot ListForecastItemAux
                
                //OnSetForecastItemList({[cityCode] : listForecatsItemAux});
                actions({type: 'SET_DATA_FORE_ITEM_LIST', payload: {[cityCode] : listForecatsItemAux}})
            } catch (error) {
                console.log(error);
            }
        }
        
        //Condicionando la peticion al servidor
        const cityCode = getCityCode(city, countryCode);
        if(allDataForecast && allForecastItemList && !allDataForecast[cityCode] && !allForecastItemList[cityCode]){

            getForecast();  
        }
        
        
        
    }, [city, countryCode,actions, allDataForecast, allForecastItemList]);
    
    //return [dataForecast, forecastItemList, city, countryCode] 
    return [city, countryCode] 
}

export default useCityPage;