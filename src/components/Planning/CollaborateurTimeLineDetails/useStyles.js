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
    },
    box: {
        height: '100%',
        backgroundColor: '#f0f2f68c'
    },
    gridAddAction: {
        marginTop: 100,
        padding: '1px 100px'
    },
    boxActionButton: {
        padding: '0px 107px 9px',
        backgroundColor: '#f0f2f68c',
        height: '100%',
        margin: '-9px 0px',
    },
}))

export default useStyles;