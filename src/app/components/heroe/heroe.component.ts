import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>

  constructor(private _router: Router) {
    this.heroeSelected = new EventEmitter();
  }

  verHeroe(index:number) {
    this._router.navigate(['/heroe',index]);
    // this.heroeSelected.emit(this.index);
  }
}
