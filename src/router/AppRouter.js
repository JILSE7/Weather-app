import React, { useCallback, useMemo, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import City from '../pages/City';
import Main from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import Welcom from '../pages/Welcom';

export const AppRouter = () => {
    const [allweather, setAllweather] = useState({}); 
    const [allDataForecast, setDataForecast] = useState({});
    const [allForecastItemList, setForecastItemList] = useState({}); 


    /* const onsetAllweather = (weatherCity) => {
        setAllweather(allweather =>  ({ ...allweather, ...weatherCity})) 
    } */
    
    /* const onsetAllweather = useMemo(() => (
        (weatherCity) => {
            setAllweather( allweather =>  ({ ...allweather, ...weatherCity})) 
            
        }
        ), [setAllweather]) */

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

    
    return (

                <Router>    
                    <div>
                        <Switch>
                            <Route exact path="/main">
                                <Main  actions={actions} data={data}/>
                            </Route>
                            <Route exact path="/city/:countryCode/:city" >
                                <City  data={data} actions = {actions} />
                            </Route>
                            <Route exact path="/" component={Welcom}/>
                            <Route component={NotFound}/>
                            
                        </Switch>
                    </div>
                </Router>   
    )
}
