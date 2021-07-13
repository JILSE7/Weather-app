import React, { useMemo, useState } from 'react'
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
    /* const onsetAllweather = (weatherCity) => {
        setAllweather(allweather =>  ({ ...allweather, ...weatherCity})) 
    } */
    
    const onsetAllweather = useMemo(() => (
        (weatherCity) => {
            setAllweather( allweather =>  ({ ...allweather, ...weatherCity})) 
            
        }
        ), [setAllweather])

    
    return (

                <Router>    
                    <div>
                        <Switch>
                            <Route exact path="/main">
                                <Main  onsetAllweather={onsetAllweather} allweather={allweather}/>
                            </Route>
                            <Route exact path="/city/:countryCode/:city" >
                                <City  allweather={allweather} onsetAllweather={onsetAllweather}/>
                            </Route>
                            <Route exact path="/" component={Welcom}/>
                            <Route component={NotFound}/>
                            
                        </Switch>
                    </div>
                </Router>   
    )
}
