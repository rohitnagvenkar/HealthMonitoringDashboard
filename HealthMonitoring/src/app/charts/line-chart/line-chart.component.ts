import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from 'src/app/shared/chart.colors';

const SAMPLE_LINECHART_DATA: any[] = [
  {    data: [65, 59, 80, 81, 90, 59, 30], label: 'Sentiment Analysis'  },
  {    data: [65, 59, 10, 81, 56, 59, 30], label: 'Image Recognition'  },
  {    data: [16, 59, 80, 81, 56, 54, 30], label: 'Forecasting'  }
];

const SAMPLE_LINECHART_LABELS: string[] = ['W1','W2','W3','W4','W5','W6','W7'];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public lineChartData: any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  public lineChartType = 'line';
  public lineCHartLegend = false;
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartColors = LINE_CHART_COLORS;
}
