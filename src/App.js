import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppPlanning from './components/Planning/AppPlanning';
import CackeContainer from './components/cacke/CackeContainer';
import { Provider } from 'react-redux';
import HooksCackeContainer from './components/cacke/redux/cackesHooks/HooksCackeContainer';
import ConsolideMensuel from './components/consolide-mensuel/ConsolideMensuel';
import store from './store/store';
import { fetchInitData } from './components/navigation/redux/actions';
import { fetchPlanning } from './components/Planning/store/actions';
import { useDispatch } from 'react-redux'
function App() {

  //const dispatch = useDispatch(); 

  useEffect(() => {
    store.dispatch(fetchInitData());
    store.dispatch(fetchPlanning());
  }, [])

  return (
    <>
      <Provider store={store}>
        <AppPlanning />
        {/* <CackeContainer />
        #### */}
        {/* <HooksCackeContainer/> */}
        {/* <ConsolideMensuel/> */}
      </Provider>

    </>
  );
}

export default App;
