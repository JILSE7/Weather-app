import React from 'react'
import {Paper} from '@material-ui/core'
import CityList from '../components/CityList';

//Components
import AppFrame from '../components/AppFrame'
//HELPERS 
import {cities} from '../helpers/cities';
import { useHistory } from 'react-router-dom';
//params


const Main = ({ allweather, onsetAllweather}) => {
    const history = useHistory();
    const handleClick = (city, countryCode) =>  {
        history.push(`/city/${countryCode}/${city}`); 
    }
    return (
        <AppFrame>   
            <Paper elevation={5}>
                < CityList onClickCity={handleClick} cities={cities} allweather={allweather} onsetAllweather={onsetAllweather}/>
            </Paper>
        </AppFrame>
    )
}


export default Main
