import { Satellite } from "@material-ui/icons";
import { getNormalizerFamilles } from "./normalizer";


const { default: types } = require("./types")

const initialState = {
    loading: false,
    entities: {},
    errors: null
}

const NavigationReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.FETCH_INIT_DATA:
            return {
                ...state,
                loading: true,
            }

        case types.FETCH_INIT_DATA_SUCCESS: {
             // debugger;
            const res = getNormalizerFamilles(action.payload);
            return {
                ...state,
                entities: res.entities,
                loading: false,
            }
        }

        default: return state;
    }


}

export default NavigationReducer;