import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

Chart.register(
  PieController, 
  ArcElement, 
  Tooltip, 
  Legend, 
  Title
);


@Component({
  selector: 'app-new-styles-chart',
  templateUrl: './new-styles-chart.component.html',
  styleUrls: ['./new-styles-chart.component.scss']
})
export class NewStylesChartComponent implements AfterViewInit {
  @ViewChild('newStylesChart') newStylesChartRef!: ElementRef;

  ngAfterViewInit() {
    this.createNewStyleChart();
  }

  createNewStyleChart(): any {
    if (this.newStylesChartRef) {
      const canvas = this.newStylesChartRef.nativeElement;

      const chart = new Chart(canvas, {
        type: 'pie',
        data: {
          labels: ['Funk','Samba', 'Podcasts', 'Sertanejo', 'Top 50 - Global'],
          datasets: [{
            label: 'Reproduções',
            data: [5, 42, 25, 12, 22],
            backgroundColor: [
              'rgb(85, 27, 179)',
              'rgb(38, 143, 190)',
              'rgb(255, 205, 86)',
              'rgb(44, 184, 178)',
              'rgb(169, 240, 77)',
            ],
            borderColor: '#fff',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Os estilos que você descobriu',
              color: '#fff',
              font: { size: 18 }
            },
            legend: {
              display: false,
            }
          }
        }
      });

      return chart;
    }
  }

}