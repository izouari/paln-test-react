import React from 'react'
import { Box, Grid } from '@material-ui/core'

const Collaborateur = (props) => {
    return (
        <>
            <Grid item xs={2}>
                <div onClick={() => props.onClick(props.affectation.idCollaborateur)}>
                    <Box>
                        <div>
                            {props.affectation.name}
                        </div>
                        <div>
                            {props.affectation.idCollaborateur}
                        </div>
                    </Box>
                </div>
            </Grid>

        </>
    )
}

export default Collaborateur
