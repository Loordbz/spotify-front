import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CardMusicComponent {
  @Input() musicName = '';
  @Input() musicImg = '';
  @Input() musicArtist = '';
}