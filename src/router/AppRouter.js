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

//Context
import {WeatherProvider} from '../context/WeatherContext';


export const AppRouter = () => {
    
    


    return (
                <WeatherProvider >
                <Router>    
                    <div>
                        <Switch>
                            <Route exact path="/main">
                                <Main />
                            </Route>
                            <Route exact path="/city/:countryCode/:city" >
                                <City   />
                            </Route>
                            <Route exact path="/" component={Welcom}/>
                            <Route component={NotFound}/>
                            
                        </Switch>
                    </div>
                </Router>   
                </WeatherProvider>
    )
}
