import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CardAlbumComponent {
  @Input() albumName = '';
  @Input() albumImg = '';
  @Input() albumArtist = '';
}