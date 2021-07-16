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
export const AppRouter = () => {

    //Reducer
    const initialState = {
        allweather : {},
        allDataForecast : {},
        allForecastItemList : {}
    };

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

     // action { type: "XXX", payload: "XXX" }
     /* const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_ALL_WEATHER':
                const weatherCity = action.payload
                const newAllWeather = { ...state.allWeather, ...weatherCity }
                return { ...state, allWeather: newAllWeather }
            case 'SET_CHART_DATA':
                const chartDataCity = action.payload 
                const newAllChartData = { ...state.allChartData, ...chartDataCity }
                return { ...state, allChartData: newAllChartData }
            case 'SET_FORECAST_ITEM_LIST':
                const forecastItemListCity = action.payload
                const newAllForecastItemListCity = { ...state.allForecastItemList, ...forecastItemListCity }
                return { ...state, allForecastItemList: newAllForecastItemListCity }
            default:
                return state 
        }
    } */

    
    const [state, dispatch] = useReducer(reducer,initialState); //react nos asegura que no generara distintas instancias, por eso aqui ya no se ocupa usememo

    

    /* const [allweather, setAllweather] = useState({}); 
    const [allDataForecast, setDataForecast] = useState({});
    const [allForecastItemList, setForecastItemList] = useState({}); 


        const onSetDataForecast = useCallback((foreCastData) => {
                setDataForecast(dataForecast => ({...dataForecast, ...foreCastData}))
        },[setDataForecast]);

        const onSetForecastItemList = useCallback((forecastItemListCity) => {
            setForecastItemList(forecastItemList => ({...forecastItemListCity, ...forecastItemList}))
    },[setForecastItemList])

        const onsetAllweather = useCallback( (weatherCity) => {
            setAllweather( allweather =>  ({ ...allweather, ...weatherCity})) 
        }, [setAllweather]);


        const actions = useMemo(() => (
            {
                onsetAllweather,
                onSetDataForecast,
                onSetForecastItemList
            }
        ),[onsetAllweather]);

        const data = useMemo(() => (
            {
                allweather,
                allDataForecast,
                allForecastItemList
            }
        ), [allweather, allDataForecast, allForecastItemList]);
 */
    
    return (

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
    )
}
