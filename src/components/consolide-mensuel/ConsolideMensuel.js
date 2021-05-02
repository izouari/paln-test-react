import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { listCds } from '../cacke/redux/consolide/Consolideselector';
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda'
import { changeCDS } from '../cacke/redux/consolide/ConsolideAction';
import { createSelector } from 'reselect';
import Activite from './Activite';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const tabTest = [
    {
      'codeActivite': 'ACT1000',
      'libelle': 'libelleAct1000'
    },
    {
      'codeActivite': 'ACT2000',
      'libelle': 'libelleAct2000'
    },
    {
      'codeActivite': 'ACT3000',
      'libelle': 'libelleAct3000'
    }
  ]

const ConsolideMensuel = () => {

  const selectedCds = useSelector(state => state.consolideReducer.selectedCds)
  const listCds = useSelector(state => state.consolideReducer.dataBrute.entities.cds)


   const listUg = useSelector(state => state.consolideReducer.dataBrute.entities.ugs)
   const listSt = useSelector(state => state.consolideReducer.dataBrute.entities.sts)



   const dispatch = useDispatch();

   console.log('listCds #### ', R.values(listCds))
   console.log('listUg #### ', listUg)
   console.log('listSt #### ', R.values(listSt))

    const classes = useStyles();
    const [value, setValue] = useState('');
    const handleChange = event => {
      console.log('event.target.value ',  event.target.value)
      event.target.value.ugs.map(ugId => console.log('UG ## ', listUg[ugId]))
      setValue(event.target.value);
      dispatch(changeCDS(event.target.value))
    };

    const [activiteState, setActiviteState] = useState({});

    const handleUpdateActivite2 = (activ) => {
      console.log('activ ', activ)
     // setActiviteState(activ)
    }

    return (
        <div>

          {
            tabTest.map(elem =>
              
               <Activite onClickAct={handleUpdateActivite2} act={elem}/>
               )
          }
         
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">CDS</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={value}
          onChange={handleChange}
          displayEmpty
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {
            R.values(listCds).map(cds => <MenuItem key={cds.id} value={cds}>{cds.name}</MenuItem>)
          }
        </Select>
      </FormControl>
      
        </div>
    )
}

export default ConsolideMensuel
