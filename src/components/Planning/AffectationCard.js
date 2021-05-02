import { Grid, TextField } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { getActiviteByCode } from '../navigation/redux/selectors';
// import BaseCard from './BaseCard'

const AffectationCard = ({ affectation }) => {

    // debugger
    const activite = useSelector(state => getActiviteByCode(state, affectation.codeActivite));

    const renderCard = () => (
        <Grid xs={1}>
            <TextField id="standard-basic"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
    )

    return (
        <div>
            {/* <BaseCard libelle={activite.libelle} children={renderCard()} /> */}

        </div>
    )
}

export default AffectationCard
