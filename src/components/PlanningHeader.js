import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const PlanningHeader = (props) => {
    const classes = useStyles();
    //console.log("PlanDetail selected ", props.selectedMatricule)
    return (
        <>
            <Grid item xs={9}>
                <Paper className={classes.root}>
                </Paper>
            </Grid>
        </>
    )
}

export default PlanningHeader
