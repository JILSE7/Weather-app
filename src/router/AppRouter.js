import React from 'react'
import { Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import City from '../pages/City';
import Main from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import Welcom from '../pages/Welcom';

export const AppRouter = () => {
    return (

                <Router>    
                    <div>
                        <Switch>
                            <Route exact path="/main" component={Main}/>
                            <Route exact path="/city" component={City}/>
                            <Route exact path="/" component={Welcom}/>
                            <Route component={NotFound}/>
                            
                        </Switch>
                    </div>
                </Router>   
    )
}
