import React from 'react'


export const CHANGE_CDS = 'CHANGE_CDS';
export const CHANGE_UG = 'CHANGE_UG';
export const CHANGE_ST = 'CHANGE_ST';

export const changeCDS = (cds) => {
    return {
        type: CHANGE_CDS,
        payload: cds
    }
}

export const changeUG = (ug) => {
    return {
        type: CHANGE_UG,
        payload: ug
    }
}

export const changeST = (st) => {
    return {
        type: CHANGE_ST,
        payload: st
    }
}
