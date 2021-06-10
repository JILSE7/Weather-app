import React from 'react'
import PropTypes from 'prop-types'
//Component Typography
import Typography from '@material-ui/core/Typography'
//Roboto
import 'typeface-roboto'

const CityInfo = ({city, country}) => {
    return (
        <>
          <Typography display="inline" variant="h4">{city},</Typography>
          <Typography display="inline" variant="h6">{country}</Typography>
        </>
    )
}

CityInfo.propTypes = {

}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}
export default CityInfo
