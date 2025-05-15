import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class NavbarComponent implements OnInit{
  constructor(private _router: Router) { }
  
  ngOnInit(): void {  }

  public route(url: string) {
    this._router.navigateByUrl(
      this._router.createUrlTree([`${url}`])
    );
  }
}
