import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from '@material-ui/core'
import {
    WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain

} from 'react-icons/wi';
//Proveedor de contexto
import {IconContext} from 'react-icons'

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
};

//Rendereizar un componente dependiendo su estado
const renderState = (state)=>{
    const Icon  = stateByName[state];
    return <Icon/>
}
const Weather = ({temperature, weather}) => {
    
    return (
        <>
        <IconContext.Provider value= {{size: '5em'}}>
            {renderState(weather)}
        </IconContext.Provider>
         <Typography display="inline" variant="h3">{temperature}</Typography>
        </>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
}

export default Weather
