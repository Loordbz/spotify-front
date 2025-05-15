import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);


@Component({
  selector: 'app-style-chart',
  templateUrl: './style-chart.component.html',
  styleUrls: ['./style-chart.component.scss']
})
export class StyleChartComponent implements AfterViewInit {
  @ViewChild('styleChart') styleChartRef!: ElementRef;

  ngAfterViewInit() {
    this.createStyleChart();
  }

  createStyleChart(): any {
    if (this.styleChartRef) {
      const canvas = this.styleChartRef.nativeElement;

      const chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels: ['Rock Classics', 'Eletronics', 'Top Hits', 'Pagode', 'MPB'],
          datasets: [{
            label: 'Reproduções',
            data: [320, 140, 100, 70, 45],
            backgroundColor: [
              'rgb(201, 203, 207)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
            ],
            borderColor: '#000',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Os estilos que você mais ouviu',
              color: '#fff',
              font: { size: 18 }
            },
            legend: {
              position: 'bottom',
              labels: {
                color: '#fff'
              }
            }
          }
        }
      });

      return chart;
    }
  }
}
