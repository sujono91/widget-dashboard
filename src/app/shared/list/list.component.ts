import {
  Component,
  OnInit,
  Input, Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { DataTypeModel, DataName } from '@models/data.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() dataTypes: Array<DataTypeModel> = [];
  @Output() addChart = new EventEmitter();
  @Output() removeChart = new EventEmitter<DataName>();
  constructor() { }

  ngOnInit () {
  }

  add (dataName: DataName) {
    this.addChart.emit(dataName);
  }

  remove (dataName: DataName) {
    this.removeChart.emit(dataName);
  }

}
