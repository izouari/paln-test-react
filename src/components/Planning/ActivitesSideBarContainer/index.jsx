import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { getActivitesOfSelectedFamille } from '../../navigation/redux/selectors';
import ElementSideBarButton from '../ElementSideBarButton';
import useStyles from './useStyles'

const ActivitesSideBarContainer = ({familleCode}) => {

    const classes = useStyles();

    debugger;

    const activtes = useSelector(state => getActivitesOfSelectedFamille(state, familleCode));
    
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Activites
                </Typography>
            </Grid>
            {
                activtes.map(activite =>
                    <Grid className={classes.gridCard} key={`key-${activite.code}`} item xs={4}>
                        <ElementSideBarButton element={activite} />
                    </Grid>)
            }
        </>
    )
}

export default ActivitesSideBarContainer;