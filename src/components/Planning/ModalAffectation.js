import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

const ModalAffectation = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    // const toggleDrawer = (side, open) => {
     
    //   console.log('side', side, open)
    //   setState({ ...state, [side]: open });
    // };
    const toggleDrawer = (side, open) => {
     
      setState({ ...state, [side]: open });
    };
  



    const sideList = () => (
      <>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </>
    );

  
    return (
      <div>
        <Button onClick={() => toggleDrawer('right', true)}>Open Right</Button>
        <Drawer anchor="right" open={state.right} onClick={() => toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
      </div>
    );
}

export default ModalAffectation
