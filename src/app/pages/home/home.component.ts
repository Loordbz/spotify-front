import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../core/services/media.service';
import { CommonModule } from '@angular/common';
import { MenuLeftComponent } from '../../components/menu-left/menu-left.component';
import { FormsModule } from '@angular/forms';
import { CardArtistComponent } from '../../components/card-artist/card-artist.component';
import { CardAlbumComponent } from '../../components/card-album/card-album.component';

export interface Artist {
  name: string;
  url: string;
}

export interface Album {
  name: string;
  url: string;
  artist: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MenuLeftComponent,
    CardArtistComponent,
    CardAlbumComponent
  ]
})
export class HomeComponent implements OnInit {
  artists: Artist[] = [];
  albums: Album[] = []; 

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.getPersonData().subscribe((data: any) => {
      data.forEach((item: any) => {
        if (item.artist) {
          this.albums.push({
            name: item.name,  
            url: item.url,     
            artist: item.artist 
          });
        } else {
          this.artists.push({
            name: item.name,   
            url: item.url 
          });
        }
      });
    });
  }
}