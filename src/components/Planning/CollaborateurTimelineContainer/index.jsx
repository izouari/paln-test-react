import { Grid } from '@material-ui/core';
import React from 'react';
import { DAYS } from "../../Model/Utils"
import AffectationSideBar from '../AffectationSideBar';
import CollaborateurItem from '../CollaborateurItem/inex';
import CollaborateurTimeLineDetails from "../CollaborateurTimeLineDetails"
import PaperItem from "../PaperItem"
import TimeLineIndicator from "../TimeLineIndicator"
import useStyles from './useStyles';


const CollaborateurTimelineContainer = ({ collaborateur }) => {

    const classes = useStyles();

    return (
        <>
            <Grid container spacing={1}>
                <Grid item container>
                    <Grid item xs={2}>
                        <CollaborateurItem
                            className={classes.collaborateurItem}
                            collaborateur={collaborateur} />
                    </Grid>


                    {
                        DAYS.map(day => {
                            return (
                                <PaperItem key={`${day}-paper`} day={day} xs={2}>
                                    <TimeLineIndicator key={`${day.nameEN}-timeLine`} day={day} />
                                </PaperItem>
                            )
                        })
                    }


                </Grid>
                <CollaborateurTimeLineDetails affectations={collaborateur.affectations} />
            </Grid>
        </>

    )
}

export default CollaborateurTimelineContainer