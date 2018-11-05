import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  map,
  switchMap
} from 'rxjs/operators';

import { ApiService } from '../core/services/api.service';
import { ENDPOINT } from '../constant';
import { ActionTypes, AddConfidentialitySuccess, AddDocTypeSuccess, AddLanguageSuccess } from './action';
import { ConfidentialityChartModel, DocTypeChartModel, LanguageChartModel } from '@models/chart.model';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }

  @Effect()
  fetchConfidentiality$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.AddConfidentiality),
    switchMap(() => {
      return this.apiService.get(ENDPOINT.CONFIDENTIALITY_DATA).pipe(
        map((data: Array<any>) => {
          const confidentialitiesChart: ConfidentialityChartModel[] = data.map(({ id, name, total_docs }) => {
            return {
              id,
              name,
              totalDocs: total_docs
            };
          });
          return confidentialitiesChart;
        }),
        map((confidentialitiesChart: ConfidentialityChartModel[]) => new AddConfidentialitySuccess(confidentialitiesChart))
      );
    })
  );

  @Effect()
  fetchDocType$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.AddDocType),
    switchMap(() => {
      return this.apiService.get(ENDPOINT.DOCTYPE_DATA).pipe(
        map((data: Array<any>) => {
          const docTypesChart: DocTypeChartModel[] = data.map(({ name, total_docs }, index) => {
            return {
              id: index,
              name,
              totalDocs: total_docs
            };
          });
          return docTypesChart;
        }),
        map((docTypesChart: DocTypeChartModel[]) => new AddDocTypeSuccess(docTypesChart))
      );
    })
  );

  @Effect()
  fetchLanguage$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.AddLanguage),
    switchMap(() => {
      return this.apiService.get(ENDPOINT.LANGUAGE_DATA).pipe(
        map((data: Array<any>) => {
          const languagesChart: LanguageChartModel[] = data.map(({ name, short_name, total_docs }) => {
            return {
              name,
              shortName: short_name,
              totalDocs: total_docs
            };
          });
          return languagesChart;
        }),
        map((languagesChart: LanguageChartModel[]) => new AddLanguageSuccess(languagesChart))
      );
    })
  );
}
