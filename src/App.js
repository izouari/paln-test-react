import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppPlanning from './components/Planning/AppPlanning';
import CackeContainer from './components/cacke/CackeContainer';
import { Provider } from 'react-redux';
import store from './components/cacke/redux/Store';
import HooksCackeContainer from './components/cacke/redux/cackesHooks/HooksCackeContainer';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppPlanning />
        <CackeContainer />
        ####
        <HooksCackeContainer/>
      </Provider>

    </>
  );
}

export default App;
