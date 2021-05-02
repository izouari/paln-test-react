import { combineReducers } from "redux";
import PlanningReducer from "../components/Planning/store/reducer";
import NavigationReducer from '../components/navigation/redux/reducer';

const rootReducer = combineReducers(
    {
        navigation: NavigationReducer,
        planning: PlanningReducer,
    }
);

export default rootReducer;