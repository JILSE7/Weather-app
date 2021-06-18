import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';

const WeatherDetails = ({humidity, wind}) => {
    return (
        <Grid container item spacing={1} xs={12} direction="row"  justify="center" alignItems="center" >
            <Typography style={{marginRight: '10px', marginTop: '10px'}}>Humedad:{humidity}%</Typography>
            <Typography style={{marginTop: '10px'}}>Viento:{wind}Km/h</Typography>
        </Grid>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetails
