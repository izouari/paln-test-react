import { Box, Collapse, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { DAYS } from '../../Model/Utils'
import { getActiviteByCode } from '../../navigation/redux/selectors'
import CardContainer from '../CardContainer'
import TimeLineDndContext from '../TimeLineDndContext'
import * as R from 'ramda'
import useStyles from './useStyles'
import AddActionButtons from '../AddActionButtons'

const CollaborateurTimeLineDetails = ({ affectations }) => {

    const getAffectationsByDay = day => R.or(affectations[day], []);
    const classes = useStyles();

    return (

        <>
            <Grid item container>
                <Grid item xs={2} />

                {
                    DAYS.map(day => (
                        <Grid className={classes.gridPadding} item xs={2} key={`${day}-card`} >
                            <Box className={classes.box}>
                                <Grid container>
                                    <CardContainer day={day} affectations={getAffectationsByDay(day)} />
                                </Grid>
                            </Box>
                        </Grid>
                    )
                    )
                }
            </Grid>
            <Grid item container>
                <Grid item xs={2} />
                {
                    DAYS.map(day => (
                        <Grid className={classes.gridPadding} item xs={2} key={`${day}-card`} >
                            <Box className={classes.boxActionButton}>
                                <Grid container>
                                    <AddActionButtons />
                                </Grid>
                            </Box>
                        </Grid>
                    )
                    )
                }
            </Grid>
        </>

    )
}

export default CollaborateurTimeLineDetails
