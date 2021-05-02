import { blue, grey } from "@material-ui/core/colors";

const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({

    drawPaperCustom: {
        width: '70%',
        overflow: 'visible'
    },
    drawPaperHeader: {
        backgroundColor: '#3f51b5',
        width: '100%',
        maxHeight: 55,

    },
    libelleHeader: {
        textAlign: 'center',
        fontFamily: 'serif',
        margin: 9,
        color: '#f0f8ff',
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: 6,
    },
    gridRecap: {
        backgroundColor: '#eaf1f1',
        // width: '30%',
        // height: '100%' 
    },
    gridSideBarDetail: {
        padding: '11px 18px',
    },
    gridSpace: {
        padding: '30px 0px',
    },
    gridCard: {
        margin: '9px 7px'
    }

}))

export default useStyles;