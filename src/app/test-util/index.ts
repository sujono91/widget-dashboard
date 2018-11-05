import { ConfidentialityChartModel, DocTypeChartModel, LanguageChartModel } from '@models/chart.model';

export function generateMockData () {
  const data: {
    confidentialityCharts: ConfidentialityChartModel[],
    docTypeCharts: DocTypeChartModel[],
    languageCharts: LanguageChartModel[]
  } = {
    confidentialityCharts: [{
      id: '1',
      name: 'Top Secret',
      totalDocs: 53096
    }],
    docTypeCharts: [{
      name: 'Email',
      totalDocs: 18
    }],
    languageCharts: [{
      name: 'Vietnamese',
      shortName: 'vi',
      totalDocs: 328
    }]
  };

  return data;
}
