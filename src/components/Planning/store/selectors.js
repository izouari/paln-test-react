import { createSelector } from "reselect";
import * as R from 'ramda'

export const getAffectations = state => state.planning.entities.affectations;
export const getCollaborateurs = state => state.planning.entities.collaborateurs;
export const isPlanningLoading = state => state.planning.loading;
export const isInitData = state => state.planning.initData;


const groupEntityByDay = R.groupBy(R.prop('day'));

export const getEquipe = createSelector(
    getCollaborateurs,
    getAffectations,
    (collaborateurs, affectations) =>

        R.map(collaborateur => {
            const hasSameCollab = R.propEq('matricule', collaborateur.matricule);
            const affectationByCollab = R.filter(hasSameCollab, R.values(affectations));

            const affectationsByDay = groupEntityByDay(R.values(affectationByCollab));
            const res = R.mergeDeepLeft({ 'affectations': affectationsByDay }, collaborateur);

            return res;

        },
            R.values(collaborateurs)
        )
);
