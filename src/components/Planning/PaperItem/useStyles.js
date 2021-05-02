const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(() => ({

    paper: {
        minHeight: 46,
        display: 'flex',
        alignItems: 'center',
    },
    defaultColorPaper: {
        backgroundColor: '#F0F2F6',
    },
    gridPadding: {
        padding: '0px 2px',
    },
    textAlignCenter: {
        textAlign: 'center',
    }
}))

export default useStyles;