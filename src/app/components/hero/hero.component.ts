import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  selectedHeroe: Heroe;
  link: String;

  constructor(private _activedRoute: ActivatedRoute, private _heroeService:HeroesService) {
    this._activedRoute.params.subscribe( params => {
      this.selectedHeroe = this._heroeService.getHeroe(params['id']);
      this.link = (this.selectedHeroe.casa == "DC") ? "assets/img/dc.png" : "assets/img/marvel.jpg";
    });
  }

  ngOnInit() {
  }

}
