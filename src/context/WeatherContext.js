import React, { createContext, useCallback, useReducer } from 'react'
//TYPES
import {types} from '../helpers/types'

 export const WeatherStateContext = createContext();
 export const WeatherDispatchContext = createContext(); 

 const initialState = {
    allweather : {},
    allDataForecast : {},
    allForecastItemList : {}
};




export const WeatherProvider = ({children}) => {
    //Reducer
      //action {type : 'Nombre de la accion', payload: 'carga que alterara al estado'} 
      const reducer = useCallback((state, action) => {
          switch (action.type) {
              case types.setAllWather:
                  const weatherCity = action.payload;
                  const newAllWeather = { ...state.allweather, ...weatherCity}; //nuevo estado
    
                  return {...state, allweather : newAllWeather} //agregando al state general
    
              case types.setDataForecast:
                  const foreCastData = action.payload;
                  const newAllDataForecast = {...state.allDataForecast, ...foreCastData};//nuevo state
    
                  return {...state, allDataForecast : newAllDataForecast};
              case types.setDataForecastItemLIst:
                  const  forecastItemList  = action.payload;
                  const newAllForecastItemLIst = {...state.allForecastItemList, ...forecastItemList};
                  return {...state, allForecastItemList : newAllForecastItemLIst};
              
              default:
                  return state;
          }
      },[]); //solo una vez
      const [stateContext, DispatchContext] = useReducer(reducer,initialState); //react nos asegura que no generara distintas instancias, por eso aqui ya no se ocupa usememo


    return (
        <WeatherDispatchContext.Provider  value={DispatchContext}>      
            <WeatherStateContext.Provider  value={stateContext}>
                    {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

