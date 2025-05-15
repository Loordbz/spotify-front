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
  selector: 'app-music-chart',
  templateUrl: './music-chart.component.html',
  styleUrls: ['./music-chart.component.scss']
})
export class MusicChartComponent implements AfterViewInit {
  @ViewChild('musicChart') musicChartRef!: ElementRef;

  ngAfterViewInit() {
    this.createMusicsChart();
  }

  createMusicsChart(): any {
    if (this.musicChartRef) {
      const canvas = this.musicChartRef.nativeElement;
      const chart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: ['Come as you are - Nirvana', 'TNT - AC/DC', 'Nothing else matters - Metallica', 'The tropper - Iron Maiden', 'Black - Pearl Jam'],
          datasets: [{
            data: [234, 210, 174, 167, 100],
            backgroundColor: [
              'rgba(74, 237, 215, 0.6)',
              'rgba(112, 86, 71, 0.6)',
              'rgba(237, 109, 74, 0.6)',
              'rgba(255, 202, 100, 0.6)',
              'rgba(63, 217, 127, 0.6)',
            ],
            borderColor: [
              'rgb(74, 237, 215)',
              'rgb(112, 86, 71)',
              'rgb(237, 109, 74)',
              'rgb(255, 202, 100)',
              'rgb(63, 217, 127)',
            ],
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'As músicas que você mais ouviu',
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
