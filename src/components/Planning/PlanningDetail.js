import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Activite from './Activite';
import { DAYS } from '../Model/Utils'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const PlanningDetail = (props) => {
    const classes = useStyles();
    console.log('Plan detail ', props)
    return (
        <>


            {

                props.selectedMatricule.length > 0 && props.selectedMatricule.indexOf(props.affectation.idCollaborateur) > -1
                &&
                <>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.root}>
                            <Grid container direction="row" spacing={1}>
                                {
                                    DAYS.map(day => {

                                        return props.affectation.affectationsMap.MONDAY &&
                                         props.affectation.affectationsMap.MONDAY.map(activite => {

                                            return (
                                                <Grid container direction="column" xs spacing={1}>
                                                    <Grid item xs>
                                                        <Activite />
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Activite />
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Activite />
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Activite />
                                                    </Grid>
                                                </Grid>
                                            )

                                        })



                                    })
                                }



                            </Grid>


                        </Paper>
                    </Grid>
                </>
            }




        </>
    )
}

export default PlanningDetail
