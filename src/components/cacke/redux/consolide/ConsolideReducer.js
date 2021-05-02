
import { ConsolideData } from "../../../consolide-mensuel/ConsolideData";
import { CHANGE_CDS, CHANGE_ST, CHANGE_UG } from "./ConsolideAction";
import { schema, normalize } from "normalizr";

// Define a users schema

const stStruct = new schema.Entity('sts');

const ugStruct = new schema.Entity('ugs', {
    sts: [stStruct]
});


const esStructure = new schema.Entity('cds', {
    ugs: [ugStruct]
});

const normalizedData = normalize(ConsolideData, [esStructure]);

const initialState = {
    dataBrute: normalizedData,
    selectedCds: null,
    selectedUg: null,
    selectedSt: null,
}

const consolideReducer = (state = initialState, action) => {

    switch(action.type) {
        case CHANGE_CDS: return {
            ...state,
            selectedCds: action.payload
        }

        case CHANGE_UG: return {
            ...state,
            selectedUg: action.payload
        }

        case CHANGE_ST: return {
            ...state,
            selectedSt: action.payload
        }

        default: return state
    }
}

export default consolideReducer