import { Box, Grid } from '@material-ui/core'
import React from 'react'

const CollaborateurItem = ({collaborateur}) => {
    console.log('collaborateur', collaborateur)
    return (
        <>
            <Grid item xs={2}>
                <div>
                    <Box>
                        <div>
                            {collaborateur.nom} -  {collaborateur.prenom}
                        </div>
                    </Box>
                </div>
            </Grid>

        </>
    )
}

export default CollaborateurItem
