import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, Grid } from '@material-ui/core';
// import Activite from './BaseCard';
import { DAYS } from '../Model/Utils'
import AffectationCard from './AffectationCard';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 2),
    },

    verticalLine: {
        borderLeft: '6px dashed green',
        height: 130,
        position: 'absolute',
    }

}));

const PlanningDetailV2 = ({ affectations, selectedMatricule }) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={10}>
                <Paper className={classes.root}>
                    <Grid container direction="row" spacing={1}>
                        {
                            DAYS.map(day => {

                                return affectations[day] &&

                                    (<Box>
                                        <Grid container direction="column" xs={2}>
                                            {
                                                affectations[day].map(affectation => {
                                                    return (
                                                        <Grid container xs={2} >
                                                           {
                                                                affectation && <AffectationCard affectation={affectation} />
                                                           }
                                                        </Grid>
                                                    )
                                                })
                                            }
                                            <div className={classes.verticalLine} />
                                        </Grid>
                                    </Box>)
                            })
                        }
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default PlanningDetailV2
