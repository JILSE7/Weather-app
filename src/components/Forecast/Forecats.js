import React from 'react'
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core'
import ForecastItem from '../ForecastItem';

//Funcion renderizadora
const renderForecastItem = (forecast) => {
    const {weekDay, hour, state, temperature} = forecast;
    console.log(weekDay);
    return (
        <Grid data-testid="forecast-item" item key={`${weekDay}${hour}`}>
            <ForecastItem hour={hour} weekDay={weekDay} state={state} temperature={temperature}/>
        </Grid>
    )
}


const Forecats = ({forecastItemList}) => {
    
    return (
        <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing={3}
            >
                {
                    forecastItemList.map(forecast => (renderForecastItem(forecast)))
                }
        </Grid>
    )
}

/*ForecastItemLIst es un array de elementos
Los elementos deben tener una forma en particular con 
las siguientes propiedades: 
    weekday: PropType.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(["cloud", "cloudy", "fog", "sunny", "rain"]),isRequired,
    temperature: PropTypes.number.isRequired
*/
Forecats.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(["clear", "clouds", "snow", "drizzle", "rain", "thunderstorm", "fog"]).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecats
