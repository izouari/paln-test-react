
import { combineEpics } from 'redux-observable';
import { FetchPlanningEpics } from '../components/Planning/store/epics';
import { FetchNavigationEpics } from '../components/navigation/redux/epics';

const rootEpics = combineEpics(
    FetchPlanningEpics,
    FetchNavigationEpics
);

export default rootEpics;