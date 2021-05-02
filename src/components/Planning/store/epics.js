import { cloneDeep } from "lodash";
import types from "./types";
import { affectationByCollab } from '../../Model/AffectationByCollab'
import { planningDto } from '../../Model/planningDto'
import { fetchPlanningFail, fetchPlanningSuccess } from '../store/actions'
import { pipe, map, delay, tap, catchError, mergeAll, mergeMap } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { of } from "rxjs";

export const FetchPlanningEpics = action$ => {

    console.log('call to Epic fetchPost ', action$)
    return action$.pipe(
        tap(c => console.log('OKKKKKK ', action$)),
        ofType(types.FETCH_PLANNING),
        tap(c => console.log('OKKKKKK In Epic ', action$)),
        mergeMap(
            () => {
                // debugger;
                return of(cloneDeep(planningDto)).pipe(
                    delay(2000),
                    tap(response => console.log('RESPONSE ••••••• ', response)),
                    map(response => fetchPlanningSuccess(response)),
                    catchError(error => of(fetchPlanningFail(error)))
                )
            }

        )

    )
};