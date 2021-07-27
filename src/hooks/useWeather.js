import { useContext } from "react";
import { WeatherDispatchContext, WeatherStateContext } from "../context/WeatherContext";



    
    const useWeather = () => {
        const state = useContext(WeatherStateContext);
        const dispatch = useContext(WeatherDispatchContext);

        if(!state, !dispatch){
            throw Error('Must set dispatch or state provider');
        }
        return [state, dispatch]
       
    }
    


export {
    useWeather
}