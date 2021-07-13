import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Typography} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton';
import IconState from '../IconState'
import { IconContext } from 'react-icons'


//Rendereizar un componente dependiendo su estado
/* const renderState = (state)=>{
    const Icon  = stateByName[state];
    return <Icon/>
} */
const Weather = ({temperature, weather}) => {
    
    return (
        <Grid container item direction="row" justifyContent="center" alignContent="center" spacing={1}>
        <IconContext.Provider value= {{size: '5em'}}>
            {   weather ? 
                (<IconState state={weather}/>) 
                                :
                    (<Skeleton variant="circle" height={80} width={80} animation="wave" ></Skeleton>)
                }
        </IconContext.Provider>
         {  temperature ? 
             (<Typography display="inline" variant="h2">{temperature}</Typography>)
                                        :
            (<Skeleton variant="rect" height={80} width={80} animation="pulse" ></Skeleton>)
             }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string,
    weather: PropTypes.oneOf(["clear", "clouds", "snow", "drizzle", "rain", "thunderstorm", "fog","haze", "mist"])
    
}

export default Weather
