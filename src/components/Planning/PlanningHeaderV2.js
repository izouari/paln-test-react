import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, Grid } from '@material-ui/core';
import { DAYS } from '../Model/Utils';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '90%'
    },
    cardContainer: {
        padding: 24,
        margin: '0px -14px 0px',
    },
}));

const PlanningHeaderV2 = ({ affectations }) => {
    const classes = useStyles();
    //console.log("PlanDetail selected ", props.selectedMatricule)
    return (
        <>
            <Grid item container xs={9}>
                {
                    DAYS.map(day => {
                        return (
                            <Grid className={classes.cardContainer} xs={2} >
                                <Paper className={classes.root}>
                                </Paper>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    )
}

export default PlanningHeaderV2
