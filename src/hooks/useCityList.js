import { useEffect, useState } from "react";
//axios
import axios from 'axios';
//Cities
import {cities} from '../helpers/cities'
import { getUrl } from "../helpers/getUrl";
import getAllWeather from "../helpers/getAllWeather";
import { getCityCode } from "../helpers/geocity";

const   useCityList = (dispatch, allweather) => {
    //const [allweather, setAllweather] = useState({}); //SUBIENDO EL ESTADO    
    const [error, setError] = useState(null);
    

    
    
    useEffect(() => {
        const getWeather = async(city, countryCode) =>{
            try {
                //Encarando el principio. no detener el flujo de datos, asi no quitamos las propiedades necesarias en el array de dependencias
                const propName = getCityCode(city, countryCode);

                //onsetAllweather({[propName] : {}});
                dispatch({type: 'SET_ALL_WEATHER', payload:{[propName] : {}} });

                const url = getUrl('weather',city,countryCode)            
                const {data} = await axios.get(url);
                
                            // .then(({data}) => {
                                const getAllWeatherAux = getAllWeather(data, city, countryCode); //helper
                                
                                //SUBIENDO EL ESTADO
                                //setAllweather(allweather => ({...allweather , ...getAllWeatherAux})) // al agregar allweather al setAllweather, lo que hace es que
                                //directamente estamos haciendo referencia a su estado y ya no es necesario ponerlo en el arreglo de depencencias
                                //si solo lo pusieras en el arreglo de dependecias, como estaria cambiando se volver a ejecutar el efecto y se haria un bucle en la funcion
                                //que nos trae la data, con esto eliminamos esa invocacion de manera inecesario y evitas una fuga de memoria
                            //})
                        
                            //onsetAllweather({...allweather , ...getAllWeatherAux});
                            //onsetAllweather(getAllWeatherAux);
                            dispatch({type: 'SET_ALL_WEATHER', payload: getAllWeatherAux });

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

        cities.forEach(({city, countryCode}) =>{ 
            if(! allweather[getCityCode(city, countryCode)]){
                console.log('Pase por aqui');
                getWeather(city, countryCode)}
            }
            
            );

        
    }, [ dispatch, allweather]);

    return [ error, setError]
}


export default useCityList;