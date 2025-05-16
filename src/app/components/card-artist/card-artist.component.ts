import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CardArtistComponent {
  @Input() artistName = '';
  @Input() artistImg = '';
}