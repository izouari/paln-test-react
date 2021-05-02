import React from 'react'
import { Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core'
import useStyles from './useStyles'
import { DeleteOutlineOutlined } from '@material-ui/icons';
import * as R from 'ramda'

const BaseCard = ({ libelle, children }) => {

    const classes = useStyles();
    
    return (
        <Grid item xs={12} className={classes.card}>
            <Paper variant="outlined">
                <Grid container>
                    {children}
                    <Grid item xs={7} className={R.isNil(children) ? classes.libelleGridWithoutChildren : classes.libelleGrid}>
                        <Typography title={libelle}>{libelle}</Typography>
                    </Grid>
                    <Grid className={classes.deleteActionGrid} item xs={2}>
                        <IconButton size="small" aria-label="delete">
                            <DeleteOutlineOutlined fontSize="inherit" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default BaseCard
