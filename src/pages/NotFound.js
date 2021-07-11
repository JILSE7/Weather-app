import React from 'react'

import {Grid, Typography, Link} from '@material-ui/core'

import {IconContext} from 'react-icons';
import {WiDaySunny} from 'react-icons/wi';

import {Link as linq} from 'react-router-dom'

export const NotFound = () => {
    return (
        <Grid container direction="column" justifyContent="center" className="full">
        <div className="highligth">
                <Grid item container justifyContent="center" alignItems="center">
                        <Grid item>
                                <IconContext.Provider value={{size: "6em"}}>
                                    <WiDaySunny/>
                                </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" alignItems="center">
                            <Typography variant="h4" color="inherit">
                              404 | Not Found

                            </Typography>
                            <Link color="inherit" aria-label="menu" component={linq} to="/welcome">
                                Ir al inicio
                            </Link>
                        </Grid>
                </Grid>
        </div>
    </Grid>
    )
}
