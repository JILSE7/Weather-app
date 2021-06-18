import React from 'react'
import PropTypes from 'prop-types'
import CityList from '../components/CityList';
//HELPERS 
import {cities} from '../helpers/cities'
const Main = ({history}) => {

    const handleClick = () =>  history.push('/city');
    return (
        <>   
                <h2>Lista de ciudades</h2>  
            <CityList onClickCity={handleClick} cities={cities}/>
        </>
    )
}

Main.propTypes = {

}

export default Main
