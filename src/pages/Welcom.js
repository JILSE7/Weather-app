import React from 'react'
//import PropTypes from 'prop-types';

import WelcomScreen  from '../components/WelcomeScreen'
import {Grid, Typography, Link} from '@material-ui/core'

import {IconContext} from 'react-icons';
import {WiDaySunny} from 'react-icons/wi';

import {Link as linq} from 'react-router-dom'

const Welcom = props => {
    return (
        <WelcomScreen>
            <Grid container direction="column" justifyContent="center" className="full">
                <div className="highligth">
                        <Grid item container justifyContent="center" alignItems="center">
                                <Grid item>
                                        <IconContext.Provider value={{size: "6em", color:"orange"}}>
                                            <WiDaySunny/>
                                        </IconContext.Provider>
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="center">
                                    <Typography variant="h4" color="inherit">
                                    <span style={{color:"blue"}}>Weather App</span> 

                                    </Typography>
                                    <Link color="inherit" aria-label="menu" component={linq} to="/main">
                                        Ingresar
                                    </Link>
                                </Grid>
                        </Grid>
                </div>
            </Grid>
        </WelcomScreen>
    )
}

Welcom.propTypes = {

}

export default Welcom
