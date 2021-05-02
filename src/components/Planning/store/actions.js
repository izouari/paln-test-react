import types from './types';

export const addAffectation = affectation => (
    {
        type: types.ADD_AFFECTATION,
        payload: affectation
    }
)
export const fetchPlanning = () => (
    {
        type: types.FETCH_PLANNING
    }

)

export const fetchPlanningSuccess = (planning) => (
    {
        type: types.FETCH_PLANNING_SUCCESS,
        payload: planning,
    }
)

export const fetchPlanningFail = () => (
    {
        type: types.FETCH_PLANNING
    }
)