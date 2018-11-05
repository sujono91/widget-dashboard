import { Action } from '@ngrx/store';
import { ConfidentialityChartModel, DocTypeChartModel, LanguageChartModel } from '@models/chart.model';

export enum ActionTypes {
  AddConfidentiality = '[Chart] Add Confidentiality',
  AddConfidentialitySuccess = '[Chart] Add Confidentiality Success',
  AddConfidentialityFailure = '[Chart] Add Confidentiality Failure',
  RemoveConfidentiality = '[Chart] Remove Confidentiality',
  AddDocType = '[Chart] Add DocType',
  AddDocTypeSuccess = '[Chart] Add DocType Success',
  AddDocTypeFailure = '[Chart] Add DocType Failure',
  RemoveDocType = '[Chart] Remove DocType',
  AddLanguage = '[Chart] Add Language',
  AddLanguageSuccess = '[Chart] Add Language Success',
  AddLanguageFailure = '[Chart] Add Language Failure',
  RemoveLanguage = '[Chart] Remove Language'
}

export class AddConfidentiality implements Action {
  readonly type = ActionTypes.AddConfidentiality;
}

export class AddConfidentialitySuccess implements Action {
  readonly type = ActionTypes.AddConfidentialitySuccess;

  constructor(public payload: ConfidentialityChartModel[]) {}
}

export class AddConfidentialityFailure implements Action {
  readonly type = ActionTypes.AddConfidentialityFailure;

  constructor(public payload: any) {}
}

export class RemoveConfidentiality implements Action {
  readonly type = ActionTypes.RemoveConfidentiality;
}

export class AddDocType implements Action {
  readonly type = ActionTypes.AddDocType;
}

export class AddDocTypeSuccess implements Action {
  readonly type = ActionTypes.AddDocTypeSuccess;

  constructor(public payload: DocTypeChartModel[]) {}
}

export class AddDocTypeFailure implements Action {
  readonly type = ActionTypes.AddDocTypeFailure;

  constructor(public payload: any) {}
}

export class RemoveDocType implements Action {
  readonly type = ActionTypes.RemoveDocType;
}

export class AddLanguage implements Action {
  readonly type = ActionTypes.AddLanguage;
}

export class AddLanguageSuccess implements Action {
  readonly type = ActionTypes.AddLanguageSuccess;

  constructor(public payload: LanguageChartModel[]) {}
}

export class AddLanguageFailure implements Action {
  readonly type = ActionTypes.AddLanguageFailure;

  constructor(public payload: any) {}
}

export class RemoveLanguage implements Action {
  readonly type = ActionTypes.RemoveLanguage;
}

export type ActionsUnion = AddConfidentiality
  | AddConfidentialitySuccess
  | AddConfidentialityFailure
  | RemoveConfidentiality
  | AddDocType
  | AddDocTypeSuccess
  | AddDocTypeFailure
  | RemoveDocType
  | AddLanguage
  | AddLanguageSuccess
  | AddLanguageFailure
  | RemoveLanguage;
