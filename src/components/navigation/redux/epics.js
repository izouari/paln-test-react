import { cloneDeep } from "lodash";
import types from "./types";
import { pipe, map, delay, tap, catchError, mergeAll, mergeMap } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { of } from "rxjs";
import { FamilleDto } from "../../Model/FamilleDto";
import { fetchInitDataSuccess } from "./actions";
import { fetchPlanningFail } from "../../Planning/store/actions";

export const FetchNavigationEpics = action$ => {

    return action$.pipe(
        ofType(types.FETCH_INIT_DATA),
        mergeMap(
            () => {
                // debugger;
                return of(cloneDeep(FamilleDto)).pipe(
                    delay(2000),
                    tap(response => console.log('RESPONSE ••••••• ', response)),
                    map(response => fetchInitDataSuccess(response)),
                    catchError(error => of(fetchPlanningFail(error)))
                )
            }

        )

    )
};