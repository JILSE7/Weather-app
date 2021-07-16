//moment / español
import moment from 'moment';
import 'moment/locale/es'
//conver-units
import convert from'convert-units'

const getDataAuxCityPage = (data) => {
    const daysAhead = [0,1,2,3,4,5];
    const days =  daysAhead.map(day  => moment().add(day, 'd'));//crea un array de dias desde el dia en el que estamos
    const dataAux = days.map(day => {
        
        //min max
        const tempArray = data.list.filter(tem  => {
            const dayOfYear = moment.unix(tem.dt).dayOfYear(); // convertimos la fecha en unix en dia del año

            return dayOfYear === day.dayOfYear();
            
        });

        //console.log(tempArray, day.format('ddd'));
        const temps = tempArray.map(item => item.main.temp)

        //const ultimo = temps.length - 1
        return ({
            dayHour: day.format('ddd'),
            min:  (temps.length > 1) ?Number(convert(Math.min(...temps) ).from('K').to('C').toFixed(0))  : 0,     //temps.sort()[0],
            máx:  (temps.length > 1) ? Number(convert(Math.max(...temps) ).from('K').to('C').toFixed(0)): 0 //temps.sort()[ultimo]
        })
    })

    return dataAux
}

export default getDataAuxCityPage;