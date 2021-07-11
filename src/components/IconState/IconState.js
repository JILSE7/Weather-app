import React from 'react'
import PropTypes from 'prop-types'

import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
    WiFog

} from 'react-icons/wi';


export const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm : WiThunderstorm,
    fog: WiFog
};

const IconState = ({state}) => {
    const StateByName = stateByName[state];
    return (
      <StateByName/>
    )
}

IconState.propTypes = {
state: PropTypes.oneOf(["clear", "clouds", "snow", "drizzle", "rain", "thunderstorm", "fog"]).isRequired
}

export default IconState
