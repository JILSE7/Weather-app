//Convert Units
import convert from 'convert-units';
//geocity
import { getCityCode } from '../helpers/geocity';
const getAllWeather = (data, city, countryCode) => {

        const temperature = convert(data.main.temp).from('K').to('C').toFixed(1) + "°c";
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const propName = getCityCode(city, countryCode)
        const state = data.weather[0].main.toLowerCase();
        const propValue  = {temperature, state, humidity, wind}
         return {[propName] : propValue}
}

export default getAllWeather;