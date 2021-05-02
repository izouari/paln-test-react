import { normalize, schema } from 'normalizr';
import * as R from 'ramda'

const activite = new schema.Entity('activites', {}, {
    idAttribute: entity => `${entity.code}`,
    processStrategy: (value, parent) => R.assocPath(['famille'], parent.code, value)
});


const famille = new schema.Entity('familles', { 
    activites: [activite],
}, 
{idAttribute: 'code'}
);


export const getNormalizerFamilles = originalData => normalize(originalData, [famille]);