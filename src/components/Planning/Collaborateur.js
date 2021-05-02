import React from 'react'
import { Box, Grid } from '@material-ui/core'

const Collaborateur = ({collaborateur}) => {

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

export default Collaborateur
