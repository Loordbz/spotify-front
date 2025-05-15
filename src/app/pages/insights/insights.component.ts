import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StyleChartComponent } from '../../components/insights/style-chart/style-chart.component';
import { MinutesChartComponent } from '../../components/insights/minutes-chart/minutes-chart.component';
import { MusicChartComponent } from '../../components/insights/music-chart/music-chart.component';
import { NewStylesChartComponent } from '../../components/insights/new-styles-chart/new-styles-chart.component';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
  imports: [
    CommonModule,
    StyleChartComponent,
    MinutesChartComponent,
    MusicChartComponent,
    NewStylesChartComponent
  ]
})
export class InsightsComponent {

}
