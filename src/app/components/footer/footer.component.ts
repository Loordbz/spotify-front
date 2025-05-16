
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class FooterComponent implements OnInit{
  constructor(private _router: Router) { }
  
  public searchText: string ='';

  ngOnInit(): void {  }

  public route(url: string) {
    this._router.navigateByUrl(
      this._router.createUrlTree([`${url}`])
    );
  }
}
