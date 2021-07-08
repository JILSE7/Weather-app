import React from 'react'
import PropTypes from 'prop-types'
import {Paper} from '@material-ui/core'
import CityList from '../components/CityList';
//Components
import AppFrame from '../components/AppFrame'
//HELPERS 
import {cities} from '../helpers/cities'
const Main = ({history}) => {

    const handleClick = () =>  history.push('/city');
    return (
        <AppFrame>   
            <Paper elevation={5}>
                < CityList onClickCity={handleClick} cities={cities}/>
            </Paper>
        </AppFrame>
    )
}

Main.propTypes = {

}

export default Main
