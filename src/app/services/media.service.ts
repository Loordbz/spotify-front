import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  getMedia() {
    return of([
      {
        id: 1,
        title: 'Top Hits 2025',
        thumbnail: '',
      },
      {
        id: 2,
        title: 'Rock Classics',
        thumbnail: '',
      },
      {
        id: 3,
        title: 'Jazz Vibes',
        thumbnail: '',
      },
    ]);
  }
}

