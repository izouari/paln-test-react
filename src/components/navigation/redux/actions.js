import types from './types';

export const fetchInitData = () => (
    {
        type: types.FETCH_INIT_DATA
    }

)

export const fetchInitDataSuccess = (planning) => (
    {
        type: types.FETCH_INIT_DATA_SUCCESS,
        payload: planning,
    }
)

export const fetchInitDataFail = () => (
    {
        type: types.FETCH_INIT_DATA_FAIL
    }
)