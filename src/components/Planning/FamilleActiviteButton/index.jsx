import { Button, Typography } from '@material-ui/core';
import React from 'react'
import * as R from 'ramda'

const FamilleActiviteButton = ({ famille, onSelectFamille }) => {

    // debugger;
    return (
        <Button variant="outlined" fullWidth color="primary" onClick={() => onSelectFamille(famille.code)}>
            <Typography variant="body2" >
                {famille.libelle}
            </Typography>
        </Button>
    )
}

export default FamilleActiviteButton;
