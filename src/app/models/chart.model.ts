export abstract class BaseChartModel {
  totalDocs: number;
}

export interface ConfidentialityChartModel extends BaseChartModel {
  id: string;
  name: string;
}

export interface DocTypeChartModel extends BaseChartModel {
  name: string;
}

export interface LanguageChartModel extends BaseChartModel {
  name: string;
  shortName: string;
}

export type ChartType = 'doughnut' | 'bar' | 'line';
export interface DataSet {
  label: string;
  data: Array<number>;
  backgroundColor: Array<string>;
  borderColor: Array<string>;
  borderWidth: number;
}
export interface ChartTicks {
  ticks: {
    beginAtZero: boolean;
  };
}
export interface ChartYAxes {
  yAxes: Array<ChartTicks>;
}
export interface ChartOptions {
  scales: ChartYAxes;
  tooltips?: {
    callbacks?: any
  };
}

export interface ChartData {
  type: ChartType;
  data: {
    labels: Array<string>;
    datasets: Array<DataSet>;
  };
  options: ChartOptions;
}

