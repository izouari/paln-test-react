import { Button, Typography } from '@material-ui/core';
import React from 'react'

const ElementSideBarButton = ({element, onSelectElement}) => {
    return (
        <Button variant="outlined" fullWidth color="primary" onClick={() => onSelectElement(element.code)}>
            <Typography variant="body2" >
                {element.libelle}
            </Typography>
        </Button>
    )
}

export default ElementSideBarButton;
