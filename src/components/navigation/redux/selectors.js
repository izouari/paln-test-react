import { createSelector } from "reselect";
import createCachedSelector from "re-reselect";
import * as R from 'ramda'


export const getFamilles = state => state.navigation.entities.familles;
export const getActiviites = state => R.or(state.navigation.entities.activites, []);
export const isNavigationLoading = state => state.navigation.loading;

export const getPropKey = (state, key) => key;

export const getActiviteByCode = createCachedSelector(
    getActiviites,
    getPropKey,
    (activites, codeActivite) => {
        // debugger;

        const res = R.prop(codeActivite)(activites);
        return res;
    }
)((state, codeActivite) => codeActivite);


export const getActiviteBySelectedTetePerim = createCachedSelector(
    getActiviites,
    getPropKey,
    (activites, stCode) => {
        // debugger;
        const haseSameTetePerim = R.pathEq(['tetePerimetre', 'code'], stCode);
        return R.filter(haseSameTetePerim, R.values(activites));
    }

)((state, stCode) => stCode);


export const getFamilleOfSelectedSt = createCachedSelector(
    getActiviteBySelectedTetePerim,
    getPropKey,
    getFamilles,
    (activitesBySelectedTetePerim, stCode, familles) => {
         // debugger;
        const groupByFamille = R.groupBy(R.prop('famille'));
        const activitesGroupedByFamille = groupByFamille(activitesBySelectedTetePerim);
        const familleKeys = R.keys(activitesGroupedByFamille);
        const sortByOrdre = R.sortBy(R.prop('ordre'));
        return sortByOrdre(R.props(familleKeys, familles));
    }

)((state, stCode) => stCode);


export const getActivitesOfSelectedFamille = createCachedSelector(
    getFamilles,
    getActiviites,
    getPropKey,
    (familles, activites, familleCode) => {
         debugger;
        const famille = R.prop(familleCode)(familles);
        const activitesCodes = R.prop('activites')(famille);
        return R.props(activitesCodes, activites);
    }

)((state, familleCode) => familleCode);