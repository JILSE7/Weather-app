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
        <Grid container justify="center" direction="row" >

            <Grid item xs={12} sm={11} md={10} lg={8} >
                <h1>Weather App React</h1>
                <Router>    
                    <div>
                        <Switch>
                            <Route exact path="/main" component={Main}/>
                            <Route exact path="/city" component={City}/>
                            <Route exact path="/welcome" component={Welcom}/>
                            <Route component={NotFound}/>
                            <Redirect to="/notdound"/>
                        </Switch>
                    </div>
                </Router>   

            </Grid>

        </Grid>
    )
}
