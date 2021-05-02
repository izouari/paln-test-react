import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import NavBar from './NavBar'
import Collaborateur from './Collaborateur'

import SideBar from './SideBar'
import Planning from './Planning'
import { fetchPlanning } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import PlanningV2 from './PlanningV2'
import { fetchInitData } from '../navigation/redux/actions'
import PlanningBody from './PlanningBody'
import { isPlanningLoading, isInitData } from './store/selectors'

const AppPlanning = () => {

    const dispatch = useDispatch();
    const planningLoading = useSelector(isPlanningLoading);
    const initData = useSelector(isInitData);

    return (
        <div>
            <Grid container>
                <Grid container>
                    <NavBar />
                </Grid>
                {/* <Grid item xs={1}>
                    <SideBar />
                </Grid> */}
                <Grid item xs={12} >
                    {/* <PlanningV2 /> */}

                    {
                        !planningLoading && !initData && <PlanningBody />
                    }

                </Grid>
            </Grid>
        </div>
    )
}

export default AppPlanning