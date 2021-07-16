import React, { createContext } from 'react'


const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext(); 

const WeatherProvider = ({children, stateContext, DispatchContext}) => {
    return (
        <WeatherDispatchContext.Provider  value={stateContext}>      
            <WeatherStateContext.Provider  value={DispatchContext}>
                    {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

export default WeatherProvider
