import { createStore, combineReducers } from "redux";
import cackeReducer from "./cackes/CackeReducer";
import consolideReducer from "./consolide/ConsolideReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


export const rootReducer = combineReducers({cackeReducer, consolideReducer})

const store = createStore(rootReducer, composeWithDevTools(
   
    // other store enhancers if any
  ));

export default store