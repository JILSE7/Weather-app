//moment / español
import moment from 'moment';
import 'moment/locale/es'
//conver-units
import convert from'convert-units'

const getListForecastCityPage = (data) =>{
    //{hour : 18, state: 'clouds', temperature: 17, weekDay: 'Jueves'}
    const interval = [4,8,12,16,20,24];

    const listForecatsItemAux = data.list.filter((item, index) => interval.includes(index)) // extrae estas posiciones del arreglo lista
                .map(i =>{
                    return({
                        hour : moment.unix(i.dt).hour(),
                        weekDay: moment.unix(i.dt).format('dddd'),
                        state: i.weather[0].main.toLowerCase(),
                        temperature:  convert(i.main.temp ).from('K').to('C').toFixed(0)
                    })
                })
    
                return listForecatsItemAux
};

export default getListForecastCityPage;

