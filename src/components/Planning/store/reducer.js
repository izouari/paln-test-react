import { Satellite } from "@material-ui/icons";
import { getNormalizerPlanning } from './normalizer';

const { default: types } = require("./types")

const initialState = {
    loading: false,
    initData: true,
    entities: {},
    errors: null
}

const PlanningReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.FETCH_PLANNING: {
            return {
                ...state,
                loading: true,
                initData: false,
            }
        }

        case types.ADD_AFFECTATION:
            return {
                ...state,
                loading: true,
            }

        case types.FETCH_PLANNING_SUCCESS: {
            // debugger;
            const res = getNormalizerPlanning(action.payload);
            return {
                ...state,
                entities: res.entities,
                loading: false,
            }
        }

        default: return state;
    }


}

export default PlanningReducer;