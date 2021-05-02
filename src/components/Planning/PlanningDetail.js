import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
// import BaseCard from './BaseCard';
import { DAYS } from '../Model/Utils'

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

                                        return props.affectation.affectationsMap[day] &&

                                            (<div>
                                                <Grid container direction="column" xs spacing={1}>
                                                    {
                                                        props.affectation.affectationsMap[day].map(activite => {
                                                            return (
                                                                <Grid item xs>
                                                                    {/* <BaseCard activite={activite} /> */}
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                    <div className={classes.verticalLine} />
                                                </Grid>
                                            </div>)
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
