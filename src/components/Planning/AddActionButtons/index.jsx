import { Icon, IconButton } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const AddActionButtons = () => {
    return (
        <IconButton size="small" aria-label="delete">
        <AddCircleOutlineIcon style={{ color: green[200] }}>add_circle</AddCircleOutlineIcon>
        
    </IconButton>
    )
}

export default AddActionButtons
