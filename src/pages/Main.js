import React, { useCallback, useMemo } from 'react'
import {Paper} from '@material-ui/core'
import CityList from '../components/CityList';

//Components
import AppFrame from '../components/AppFrame'
//HELPERS 
import {cities} from '../helpers/cities';
import { useHistory } from 'react-router-dom';
//params


const Main = () => {
    const history = useHistory();
     const handleClick = useCallback((city, countryCode) =>  {
        history.push(`/city/${countryCode}/${city}`); 
    },[history]); 

    
    return (
        <AppFrame>   
            <Paper elevation={5}>
                < CityList onClickCity={handleClick} cities={cities} />
            </Paper>
        </AppFrame>
    )
}


export default Main
