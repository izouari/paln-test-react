import { Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { getActiviteByCode } from '../../navigation/redux/selectors';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import BaseCard from '../BaseCard/index'


const AffectationCard2 = ({ affectation }) => {

    const activite = useSelector(state => getActiviteByCode(state, affectation.codeActivite));

    return (
        <BaseCard libelle={activite.libelle}>
            <Grid item xs={3}>
                <TextField 
                fullWidth 
                InputLabelProps={{
                    shrink: true,
                }}
                autoFocus></TextField>
            </Grid>
        </BaseCard>
    )
}

export default AffectationCard2
