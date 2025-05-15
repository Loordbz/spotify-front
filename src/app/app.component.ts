import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { PlayerComponent } from './components/player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterModule,
    NavbarComponent,
    InsightsComponent,
    PlayerComponent
  ]
})
export class AppComponent {
  title = 'spotify-front';
}
