import React, { useCallback, useMemo, useState } from 'react'
import { useReducer } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import City from '../pages/City';
import Main from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import Welcom from '../pages/Welcom';

//TYPES
import {types} from '../helpers/types'
//Context
import WeatherProvider from '../context';

const initialState = {
    allweather : {},
    allDataForecast : {},
    allForecastItemList : {}
};
export const AppRouter = () => {
    
    
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


    
    const [state, dispatch] = useReducer(reducer,initialState); //react nos asegura que no generara distintas instancias, por eso aqui ya no se ocupa usememo


    return (
                <WeatherProvider stateContext={state}  DispatchContext={dispatch}>
                <Router>    
                    <div>
                        <Switch>
                            <Route exact path="/main">
                                <Main  actions={dispatch} data={state}/>
                            </Route>
                            <Route exact path="/city/:countryCode/:city" >
                                <City  data={state} actions = {dispatch} />
                            </Route>
                            <Route exact path="/" component={Welcom}/>
                            <Route component={NotFound}/>
                            
                        </Switch>
                    </div>
                </Router>   
                </WeatherProvider>
    )
}
