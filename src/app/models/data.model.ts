export interface DataURLModel {
  labels: string;
  data: string;
}

export type DataName = 'confidentiality' | 'doctype' | 'language';

export interface DataTypeModel {
  name: DataName;
  icon: string;
  dataUrl: DataURLModel;
  isActive: boolean;
}
