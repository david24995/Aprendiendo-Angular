import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  buscar: string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroeService:HeroesService) {

  }

  ngOnInit() {
        this._activatedRoute.params.subscribe( params => {
      this.buscar = params['buscar'];
      this.heroes = this._heroeService.findHeroe(this.buscar);
    });
  }

}
