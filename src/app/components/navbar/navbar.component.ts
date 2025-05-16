import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class NavbarComponent implements OnInit{
  constructor(private _router: Router) { }
  
  public searchText: string ='';

  ngOnInit(): void {  }

  public route(url: string) {
    this._router.navigateByUrl(
      this._router.createUrlTree([`${url}`])
    );
  }
}
