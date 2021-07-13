import { useEffect, useState, useDebugValue } from 'react';
//params
import { useParams } from 'react-router';
//axios
import axios from 'axios';
import { getUrl } from '../helpers/getUrl';
import getDataAuxCityPage from '../helpers/getDataAuxCityPage';
import getListForecastCityPage from '../helpers/getListForecastCityPage';

const useCityPage = () => {
    const [dataForecast, setDataForecast] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);
    const {city, countryCode} = useParams();
    
    useDebugValue(`Estoy en mi customHook y puedo mostrar informacion para retroalimentar al programador ${city}`);
    useEffect(() => {
    const url = getUrl('forecast',city, countryCode);
        
        const getForecast = async() => {
            try {
                
                const {data} = await axios.get(url);
                const dataAux = getDataAuxCityPage(data); //helper for dataAux
                setDataForecast(dataAux);

                const listForecatsItemAux = getListForecastCityPage(data);//helper fot ListForecastItemAux
                console.log(listForecatsItemAux);
                setForecastItemList(listForecatsItemAux)
            } catch (error) {
                console.log(error);
            }
        }
        
        getForecast();  
        
        
        
    }, [city, countryCode]);
    
    return [dataForecast, forecastItemList, city, countryCode] 
}

export default useCityPage;