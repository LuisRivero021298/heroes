import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public heroe:Heroe;

  constructor( 
    private _activateRouter:ActivatedRoute, 
    private _heroeService:HeroesService  
  ) {  }

  ngOnInit() {
    this._activateRouter.params.subscribe( params => {
      let idx = params['id'];
      this.heroe = this._heroeService.getHeroe(idx);
    });
  }

}
