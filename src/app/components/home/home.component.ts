import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
  ]
})
export class HomeComponent implements OnInit {
  mediaList: any[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.getMedia().subscribe((data: any) => {
      this.mediaList = data;
    });
  }
}
