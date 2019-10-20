import React from 'react'
import { Grid } from '@material-ui/core'
import NavBar from './NavBar'
import Collaborateur from './Collaborateur'

import SideBar from './SideBar'
import Planning from './Planning'

const AppPlanning = () => {
    return (
        <div>
            <Grid container>
                <Grid container>
                    <NavBar />
                </Grid>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} style={{backgroundColor: '#f5f5f5'}}>
                    <Planning />
                </Grid>
            </Grid>
        </div>
    )
}

export default AppPlanning