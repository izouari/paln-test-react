import { grey } from "@material-ui/core/colors";

const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(() => ({

    deleteActionGrid: {
       justifyContent: 'center',
       alignItems: 'center',
       display: 'flex',
    },
    card: {
        padding: '2px',
    },
    libelleGrid: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0',
        minHeight: 50,
    },
    paper: {
        backgroundColor: grey[200],
    },
    libelleGridWithoutChildren: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 10px',
        minHeight: 50,
    },
}))

export default useStyles;