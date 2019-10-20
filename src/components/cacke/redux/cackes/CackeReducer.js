import { BY_CACKE } from "./CackeTypes"

const initialState = {
    numberOfCackes: 10
}

const cackeReducer = (state = initialState, action) => {

    switch(action.type) {
        case BY_CACKE: return {
            ...state,
            numberOfCackes: state.numberOfCackes - 1
        }
        default: return state
    }
}

export default cackeReducer