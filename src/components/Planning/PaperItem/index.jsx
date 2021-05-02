import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import useStyles from './useStyles';

const PaperItem = ({xs, day, variant, children}) => {

    const classes = useStyles();

    return (
            <Grid item xs={2} className={classes.gridPadding}>
                <Paper 
                className={`${classes.paper} ${classes.defaultColorPaper}`}
                variant={variant} 
                elevation={0}
                >
                    {children}
                </Paper>
            </Grid>
    )
}

export default PaperItem
