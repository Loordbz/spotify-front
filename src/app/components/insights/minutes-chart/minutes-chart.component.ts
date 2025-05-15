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
  selector: 'app-minutes-chart',
  templateUrl: './minutes-chart.component.html',
  styleUrls: ['./minutes-chart.component.scss']
})
export class MinutesChartComponent implements AfterViewInit {
  @ViewChild('minutesChart') minutesChartRef!: ElementRef;


  ngAfterViewInit() {
    this.creatMinutesChart();
  }

  creatMinutesChart(): any {
    if (this.minutesChartRef) {
      const canvas = this.minutesChartRef.nativeElement;
      const chart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
          datasets: [{
            data: [278, 628, 234, 317, 306, 210, 217],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 205, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(201, 203, 207, 0.6)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Olha quantos minutos você ouviu',
              color: '#fff',
              font: {
                size: 18,
                family: 'sans-serif'
              }

            },
            legend: {
              display: false,
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            y: {
              title: {
                display: true,
                color: '#fff',
                padding: 10,
                font: {
                  size: 18,
                  family: 'sans-serif'
                }
              },
              min: 0,
              ticks: {
                color: '#fff',
              },
              grid: {
                color: 'rgba(255,255,255,0.1)'
              }
            }
          }
        }
      });

      return chart;
    }
  }
}
