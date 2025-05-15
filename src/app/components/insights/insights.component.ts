import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PieController
} from 'chart.js';

// Registrar os elementos necessários para o gráfico de pizza
Chart.register(ArcElement, Tooltip, Legend, Title, PieController);

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChartRef!: ElementRef;

  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart(): any {
    if (this.pieChartRef) {
      const canvas = this.pieChartRef.nativeElement;
      
      const chart = new Chart(canvas, {
        type: 'pie',
        data: {
          labels: ['Rock Classics', 'Jazz Vibes', 'Top Hits', 'Chill Beats', 'Focus'],
          datasets: [{
            label: 'Reproduções',
            data: [120, 90, 75, 60, 45],
            backgroundColor: [
              '#1db954',
              '#ff6384',
              '#36a2eb',
              '#ffcd56',
              '#9966ff'
            ],
            borderColor: '#111',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Distribuição de Reproduções por Categoria',
              color: '#fff',
              font: { size: 18 }
            },
            legend: {
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
