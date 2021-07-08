import React from 'react'
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


export default Main
