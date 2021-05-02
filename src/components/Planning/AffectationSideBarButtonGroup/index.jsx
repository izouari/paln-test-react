import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import * as R from 'ramda';

const AffectationSideBarButtonGroup = ({ onSelectTab, selectedTab }) => {

    const tabs = ['ACTIVITE', 'RENFORT', 'ABSENCE'];

    return (
        <>
            <ButtonGroup fullWidth color="primary" aria-label="outlined primary button group">
                {
                    tabs.map(tab => <Button variant={R.equals(selectedTab, tab) ? "contained" : "outlined"} key={`tab-${tab}`} onClick={() => onSelectTab(tab)}>{tab}</Button>)
                }
            </ButtonGroup>
        </>
    )
}

export default AffectationSideBarButtonGroup;
