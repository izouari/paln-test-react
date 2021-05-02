import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getActivitesOfSelectedFamille, getFamilleOfSelectedSt, getFamilles } from '../../navigation/redux/selectors';
import * as R from 'ramda'
import useStyles from './useStyles'
import ActivitesSideBarContainer from '../ActivitesSideBarContainer';
import ElementSideBarButton from '../ElementSideBarButton';

const FamilleActiviteContainer = () => {

    const classes = useStyles();
    const familles = useSelector(state => getFamilleOfSelectedSt(state, '30005000'));
    const [selectedFamille, setSelectedFamille] = useState('');
    const [selectedTab, setSelectedTab] = useState('ACTIVITE');

    const handleSelectFamille = (familleCode) => {
        setSelectedFamille(familleCode);
    }


    return (

        <>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Familles
                </Typography>
            </Grid>
            {
                familles.map(famille =>
                    <Grid className={classes.gridCard} key={`key-${famille.code}`} item xs={4}>
                        <ElementSideBarButton element={famille} onSelectElement={handleSelectFamille} />
                    </Grid>)
            }

            {
                selectedFamille && <ActivitesSideBarContainer familleCode={selectedFamille} />
            }

        </>


    )
}


export default FamilleActiviteContainer;
