import { ConfidentialityChartModel, DocTypeChartModel, LanguageChartModel } from '@models/chart.model';
import { ActionsUnion, ActionTypes, AddLanguageSuccess, RemoveConfidentiality } from './action';

export interface State {
  confidentialityCharts: Array<ConfidentialityChartModel>;
  docTypeCharts: Array<DocTypeChartModel>;
  languageCharts: Array<LanguageChartModel>;
}

const initialState: State = {
  confidentialityCharts: [],
  docTypeCharts: [],
  languageCharts: []
};

export function reducer (
  state = initialState,
  action: ActionsUnion
): State {
  switch (action.type) {
    case ActionTypes.AddConfidentialitySuccess: {
      return {
        ...state,
        confidentialityCharts: [...state.confidentialityCharts, ...action.payload]
      };
    }

    case ActionTypes.RemoveConfidentiality: {
      return {
        ...state,
        confidentialityCharts: []
      };
    }

    case ActionTypes.AddDocTypeSuccess: {
      return {
        ...state,
        docTypeCharts: [...state.docTypeCharts, ...action.payload]
      };
    }

    case ActionTypes.RemoveDocType: {
      return {
        ...state,
        docTypeCharts: []
      };
    }

    case ActionTypes.AddLanguageSuccess: {
      return {
        ...state,
        languageCharts: [...state.languageCharts, ...action.payload]
      };
    }

    case ActionTypes.RemoveLanguage: {
      return {
        ...state,
        languageCharts: []
      };
    }

    case ActionTypes.AddConfidentiality:
    case ActionTypes.AddDocType:
    case ActionTypes.AddLanguage:
    case ActionTypes.AddConfidentialityFailure:
    case ActionTypes.AddDocTypeFailure:
    case ActionTypes.AddLanguageFailure:
    default: {
      return state;
    }
  }
}
