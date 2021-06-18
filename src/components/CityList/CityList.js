import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import Grid from '@material-ui/core/Grid';
import {List, ListItem} from '@material-ui/core'


//renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventoOnClick =>  (cityandcountry) =>{
    const {city, country} = cityandcountry;

        return (
        <ListItem button key = {city} onClick={eventoOnClick}>
            <Grid  container item xs={12} justify="center" alignItems="center">

                <Grid item xs={12}sm={8} >
                    <CityInfo city ={city} country={country} />

                </Grid>
                
                <Grid  item xs={12}sm={4} container justify="center">

                    <Weather temperature={"10"} weather="fog"/>
                </Grid>


            </Grid>
        </ListItem>   
        )
}
const CityList = ({cities, onClickCity}) => {
    return (
        <List>
            {
                cities.map((city,i) => renderCityAndCountry(onClickCity)(city))
            } 
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired, //ptar
    //onClickCity:PropTypes.func.isRequired,//ptfr
}

export default CityList
