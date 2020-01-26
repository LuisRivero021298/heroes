import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  searchHero(search:string){
    this._router.navigate(['/heroes', search]);
    //this._router.navigate(['/search-heroes', search]);
  }
}
