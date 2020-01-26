import { Component, OnInit, OnChanges } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {
  public heroes: Array<Heroe> = [];
  public param: string;

  constructor(
    private _route: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit() {  
    this.param = this._route.params['value'].search;
    if(this.param !== undefined){
      this.searchHeroes();
    } else{
      this.heroes = this._heroesService.getHeroes();
    }
  }

  searchHeroes(){
    this._route.params.subscribe( params => {
      this.param = params['search'];
      this.heroes = this._heroesService.searchHeroe(this.param);
    });
  }


}
