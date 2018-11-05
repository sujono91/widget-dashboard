import { reducer } from './reducer';
import * as fromApp from './reducer';
import {
  AddConfidentialitySuccess,
  RemoveConfidentiality,
  AddDocTypeSuccess,
  AddLanguageSuccess,
  RemoveLanguage,
  RemoveDocType
} from './action';
import { generateMockData } from '../test-util';

describe('AppReducer', () => {
  const mockData = generateMockData();
  const initialState: fromApp.State = {
    confidentialityCharts: [],
    docTypeCharts: [],
    languageCharts: []
  };

  it('should return the initial state if action is empty', () => {
    const result = reducer(initialState, {} as any);

    expect(result).toEqual(initialState);
  });

  it('should add confidentiality if action is AddConfidentialitySuccess', () => {
    const result = reducer(initialState, new AddConfidentialitySuccess(mockData.confidentialityCharts));

    expect(result.confidentialityCharts).toEqual(mockData.confidentialityCharts);
  });

  it('should remove confidentiality if action is RemoveConfidentiality', () => {
    const result = reducer(initialState, new RemoveConfidentiality());

    expect(result.confidentialityCharts).toEqual([]);
  });

  it('should add doctype if action is AddDocTypeSuccess', () => {
    const result = reducer(initialState, new AddDocTypeSuccess(mockData.docTypeCharts));

    expect(result.docTypeCharts).toEqual(mockData.docTypeCharts);
  });

  it('should remove doctype if action is AddDocTypeSuccess', () => {
    const result = reducer(initialState, new RemoveDocType());

    expect(result.docTypeCharts).toEqual([]);
  });

  it('should add language if action is AddLanguageSuccess', () => {
    const result = reducer(initialState, new AddLanguageSuccess(mockData.languageCharts));

    expect(result.languageCharts).toEqual(mockData.languageCharts);
  });

  it('should remove language if action is RemoveLanguage', () => {
    const result = reducer(initialState, new RemoveLanguage());

    expect(result.languageCharts).toEqual([]);
  });
});
