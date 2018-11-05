import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { DataTypeModel } from '@models/data.model';
import {
  ConfidentialityChartModel,
  DocTypeChartModel,
  LanguageChartModel,
  BaseChartModel
} from '@models/chart.model';
import {
  AddConfidentiality,
  RemoveConfidentiality,
  AddDocType,
  RemoveDocType,
  AddLanguage,
  RemoveLanguage
} from '../store/action';
import { State } from '../store/reducer';
import { NAME } from '../constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  dataTypes: Array<DataTypeModel>;
  confidentialitiesChartSub: Subscription;
  docTypesChartSub: Subscription;
  languagesChartSub: Subscription;

  private mapDispatch = {
    [NAME.CONFIDENTIALITY]: {
      add: AddConfidentiality,
      remove: RemoveConfidentiality
    },
    [NAME.DOCTYPE]: {
      add: AddDocType,
      remove: RemoveDocType
    },
    [NAME.LANGUAGE]: {
      add: AddLanguage,
      remove: RemoveLanguage
    }
  };
  private red = 0;
  private green = 0;
  private blue = 0;

  data = {
    [NAME.CONFIDENTIALITY]: {
      rows: [],
      title: NAME.CONFIDENTIALITY,
      labels: [],
      hoverLabels: [],
      backgroundColor: [],
      borderColor: []
    },
    [NAME.DOCTYPE]: {
      rows: [],
      title: NAME.DOCTYPE,
      labels: [],
      hoverLabels: [],
      backgroundColor: [],
      borderColor: []
    },
    [NAME.LANGUAGE]: {
      rows: [],
      title: NAME.LANGUAGE,
      labels: [],
      hoverLabels: [],
      backgroundColor: [],
      borderColor: []
    }
  };

  constructor(private store: Store<State>) { }

  ngOnInit () {
    this.initDataTypes();
    this.initSubs();
  }

  ngOnDestroy () {
    this.confidentialitiesChartSub.unsubscribe();
    this.docTypesChartSub.unsubscribe();
    this.languagesChartSub.unsubscribe();
  }

  get defaultBackgroundColor () {
    this.red = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);
    return `rgba(${this.red}, ${this.green}, ${this.blue}, 0.5)`;
  }

  get defaultBorderColor () {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, 1)`;
  }

  private initDataTypes () {
    this.dataTypes = [{
      name: 'confidentiality',
      icon: 'fa fa-user-secret',
      isActive: false,
      dataUrl: {
        labels: 'confidentiality_labels.json',
        data: 'confidentiality_data.json'
      }
    }, {
      name: 'doctype',
      icon: 'fa fa-file',
      isActive: false,
      dataUrl: {
        labels: 'doctype_labels.json',
        data: 'doctype_data.json'
      }
    }, {
      name: 'language',
      icon: 'fa fa-language',
      isActive: false,
      dataUrl: {
        labels: 'language_labels',
        data: 'language_data'
      }
    }];
  }

  private initSubs () {
    this.confidentialitiesChartSub = this.store.pipe(
      select((state: any) => state.home.app.confidentialityCharts)
    ).subscribe((data: ConfidentialityChartModel[]) => this.handleData(data, NAME.CONFIDENTIALITY));

    this.docTypesChartSub = this.store.pipe(
      select((state: any) => state.home.app.docTypeCharts)
    ).subscribe((data: DocTypeChartModel[]) => this.handleData(data, NAME.DOCTYPE));

    this.languagesChartSub = this.store.pipe(
      select((state: any) => state.home.app.languageCharts),
    ).subscribe((data: LanguageChartModel[]) => this.handleData(data, NAME.LANGUAGE));
  }

  private handleData (
    data: BaseChartModel[],
    type: string) {
    this.data[type] = {
      rows: data.length > 0 ? data.map((d: any) => d.totalDocs) : [],
      title: type,
      labels: data.length > 0 ? data.map((d: any) => d.shortName || d.name) : [],
      hoverLabels: data.length > 0 ? data.map((d: any) => d.name) : [],
      backgroundColor: data.map(() => this.defaultBackgroundColor),
      borderColor: data.map(() => this.defaultBorderColor),
    };
    this.dataTypes = this.dataTypes.map((dataType: DataTypeModel) => {
      return {
        ...dataType,
        isActive: this.data[dataType.name].rows.length > 0
      };
    });
  }

  addChart (name: string) {
    const action = this.mapDispatch[name].add;
    this.store.dispatch(new action());
  }

  removeChart (name: string) {
    const action = this.mapDispatch[name].remove;
    this.store.dispatch(new action());
  }

  onDrop (event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataTypes, event.previousIndex, event.currentIndex);
    this.dataTypes = this.dataTypes.slice();
  }

}
