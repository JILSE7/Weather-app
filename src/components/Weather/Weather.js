import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Typography} from '@material-ui/core'
import IconState from '../IconState'
import { IconContext } from 'react-icons'


//Rendereizar un componente dependiendo su estado
/* const renderState = (state)=>{
    const Icon  = stateByName[state];
    return <Icon/>
} */
const Weather = ({temperature, weather}) => {
    
    return (
        <Grid container item direction="row" justify="center" alignContent="center" spacing={1}>
        <IconContext.Provider value= {{size: '5em'}}>
            <IconState state={weather}/>
        </IconContext.Provider>
         <Typography display="inline" variant="h2">{temperature}</Typography>
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    weather: PropTypes.oneOf(["cloud", "cloudy", "fog", "sunny", "rain"]).isRequired,
    
}

export default Weather
