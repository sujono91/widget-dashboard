import { ActionReducerMap } from '@ngrx/store';
import * as fromApp from './reducer';

export interface State {
  app: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer
};
