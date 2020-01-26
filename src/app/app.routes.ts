import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';

const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'heroes/:search', component: HeroesComponent },
	{ path: 'heroe/:id', component: HeroeComponent },
	{ path: 'search-hero/:search', component: SearchHeroeComponent },
	{ path: '**', redirectTo: 'home' },
];

export const _ROUTING = RouterModule.forRoot(ROUTES);