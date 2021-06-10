import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo';
import Weather from '../Weather';



const renderCityAndCountry = (cityandcountry) =>{
    const {city, country} = cityandcountry;

    return (
     <li key = {city}>
         <Weather temperature={"10"} weather="fog"/>
         <CityInfo city ={city} country={country} />
     </li>   
    )
}

const CityList = ({cities}) => {
    return (
        <ul>
            {
                cities.map((city,i) => renderCityAndCountry(city))
            } 
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired, //ptar
}

export default CityList
