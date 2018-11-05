import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, ViewChild, EventEmitter, Output } from '@angular/core';
import { Chart } from 'chart.js';

import { ChartData, ChartOptions, ChartType } from '@models/chart.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data: Array<number>;
  @Input() labels: Array<string>;
  @Input() hoverLabels: Array<string>;
  @Input() title: string;
  @Input() backgroundColor: Array<string>;
  @Input() borderColor: Array<string>;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('canvas') private chartRef;

  chart: any;
  chartConfig: ChartData;
  private chartTypes: Array<ChartType> = ['doughnut', 'bar', 'line'];
  private currentIndexType = 0;
  private defaultType: ChartType = this.chartTypes[this.currentIndexType];
  private defaultOptions: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem: any, chartData: any) => {
          const { index } = tooltipItem;
          return `${this.hoverLabels[index]}: ${chartData.datasets[0].data[index]}`;
        }
      }
    }
  };
  private defaultBorderWidth = 1;
  private DEBOUNCE_TIME = 300;
  changeChartClass = 'fa fa-refresh fa-md';

  constructor() { }

  ngOnInit () {
  }

  ngOnChanges (change: any) {
    if (change.data) {
      this.chartConfig = {
        type: this.defaultType,
        data: {
          labels: this.labels,
          datasets: [{
            label: this.title,
            data: this.data,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.defaultBorderWidth
          }]
        },
        options: this.defaultOptions
      };
      this.chart = new Chart(this.chartRef.nativeElement, this.chartConfig);
    }
  }

  closeChart () {
    this.close.emit();
  }

  changeChartType () {
    this.currentIndexType = (this.currentIndexType + 1) % 3;
    this.defaultType = this.chartTypes[this.currentIndexType];
    this.chartConfig = {
      ...this.chartConfig,
      type: this.defaultType
    };
    this.chart.destroy();
    this.chart = new Chart(this.chartRef.nativeElement, this.chartConfig);
  }
}
