import { Avatar, Button, Drawer, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import BaseCard from '../BaseCard';
import useStyles from './useStyles';
import AffectationSideBarButtonGroup from '../AffectationSideBarButtonGroup'
import FamilleActiviteContainer from '../FamilleActiviteContainer';
import * as R from 'ramda';

const AffectationSideBar = ({ libelleHeader, children }) => {

    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState('ACTIVITE')

    const renderActiviteContent = () => {
        console.log('renderActiviteContent');
        return <FamilleActiviteContainer />;
    }


    const handleSelectTab = tab => {
        setSelectedTab(tab)
    }

    const renderContentTab = () => {

        switch (selectedTab) {
            case "ACTIVITE": {
                return <FamilleActiviteContainer />;
            }
            case "RENFORT": {

                return <div>RENFORT test</div>;
            }
            case "ABSENCE":

                return <div>ABSENCE test</div>;

            default: {
                console.log('invalid TAB');
                break;
            }
        }

    }

    return (
        <div >
            <Drawer anchor="right" open classes={{ paper: classes.drawPaperCustom }}>
                <Grid className={classes.drawPaperHeader} xs={12} container>
                    <Grid item className={classes.avatar}>
                        <Avatar>IZ</Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={classes.libelleHeader}>{libelleHeader}</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item container className={classes.gridRecap} xs={4}>
                        <Grid item xs={11} className={classes.gridCard}>
                            <BaseCard libelle="testRecap1"></BaseCard>
                            <BaseCard libelle="testRecap2"></BaseCard>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} className={classes.gridSideBarDetail}>
                        <Grid item xs={12} >
                            <AffectationSideBarButtonGroup selectedTab={selectedTab} onSelectTab={handleSelectTab} />
                        </Grid>
                        <Grid item container xs={12} className={classes.gridSpace}>
                            {
                                renderContentTab()
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Drawer>

        </div>
    )
}

export default AffectationSideBar
