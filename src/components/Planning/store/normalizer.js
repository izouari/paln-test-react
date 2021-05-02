// import { normalize, schema } from 'normalizr';

// const affectations = new schema.Entity('affectationsMap');

// const planning = new schema.Entity('plannings', { affectations }, {
//     idAttribute: entity => entity.idCollaborateur
// });


// export const getNormalizerPlanning = originalData => normalize(originalData, [planning]);


import { normalize, schema } from 'normalizr';

const collaborateur = new schema.Entity('collaborateurs', {}, {
    idAttribute: 'matricule'
});

const renfort = new schema.Entity('renforts', {}, {
    idAttribute: entity => `${entity.matricule}-${entity.date}`
});

const absence = new schema.Entity('absences', {}, {
    idAttribute: entity => `${entity.matricule}-${entity.date}`
});

const affectation = new schema.Entity('affectations', {}, {
    idAttribute: entity => `${entity.matricule}-${entity.date}-${entity.codeActivite}`
});

const planning = new schema.Entity('plannings', { 
    collaborateurs: [collaborateur],
    renforts: [renfort],
    absences: [absence],
    affectations: [affectation],
});


export const getNormalizerPlanning = originalData => normalize(originalData, planning);
