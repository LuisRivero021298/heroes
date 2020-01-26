import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() heroe:any = {};
  @Input() i:any;

  @Output() heroSelected: EventEmitter<number>;

  constructor() { 
  	this.heroSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  viewHero() {
  	this.heroSelected.emit(this.i);
  }

}
