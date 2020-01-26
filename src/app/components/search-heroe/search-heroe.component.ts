import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {
  public searchHeroes:Array<Heroe>;

  constructor( 
    private _route: ActivatedRoute,
    private _heroesService: HeroesService
    ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      console.log(params);
      let search = params['search'];

      this.searchHeroes = this._heroesService.searchHeroe(search);
      console.log(this.searchHeroes);
    });
  }

}
